import {useForm} from "react-hook-form";
import {loginSchema, type LoginSchema} from "../constants/LoginSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../utils/constants/routes.ts";

export const useLogin = () => {
    const navigate = useNavigate();

    const loginForm = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            idInstance: '',
            apiTokenInstance: ''
        }
    });

    const onSubmit = loginForm.handleSubmit(async (value) => {
        localStorage.setItem("idInstance", value.idInstance)
        localStorage.setItem("apiTokenInstance", value.apiTokenInstance)
        navigate(ROUTES.ROOT);
    })

    return {
        form: loginForm,
        functions: { onSubmit }
    }
}