import {useForm} from "react-hook-form";
import {loginSchema, type LoginSchema} from "../constants/LoginSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../utils/constants";
import {useGetStateInstanceMutation} from "../../../shared/api/hooks";
import {useState} from "react";

export const useLogin = () => {
    const navigate = useNavigate();
    const login = useGetStateInstanceMutation()
    const [instanceError, setInstanceError] = useState<string | null>(null);

    const loginForm = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            idInstance: '',
            apiTokenInstance: ''
        }
    });

    const onSubmit = loginForm.handleSubmit(async (value) => {
        setInstanceError(null);

        localStorage.setItem("idInstance", value.idInstance);
        localStorage.setItem("apiTokenInstance", value.apiTokenInstance);

        try {
            const state = await login.mutateAsync({});
            if (state.data.stateInstance !== "authorized") {
                localStorage.removeItem("idInstance");
                localStorage.removeItem("apiTokenInstance");

                setInstanceError("Инстанс не авторизован");
                return;
            }

            navigate(ROUTES.ROOT);
        } catch {
            localStorage.removeItem("idInstance");
            localStorage.removeItem("apiTokenInstance");

            setInstanceError("Неверные данные");
        }
    });

    return {
        states: { instanceError },
        form: loginForm,
        functions: { onSubmit, setInstanceError }
    }
}