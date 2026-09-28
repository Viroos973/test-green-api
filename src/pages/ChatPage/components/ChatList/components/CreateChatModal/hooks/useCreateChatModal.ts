import {useForm, useWatch} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createChatSchema, type CreateChatSchema} from "../constants/CreateChatSchema.ts";
import {usePostCheckAccountMutation} from "../../../../../../../shared/api/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const useCreateChatModal = (closeModal: () => void, setInterlocutor: (interlocutor: string|null) => void) => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const checkAccount = usePostCheckAccountMutation()

    const createChatForm = useForm<CreateChatSchema>({
        resolver: zodResolver(createChatSchema),
        defaultValues: {
            phoneNumber: ''
        }
    });

    const phoneNumber = useWatch({
        control: createChatForm.control,
        name: "phoneNumber"
    });

    const handleCloseModal = () => {
        createChatForm.reset();
        closeModal();
    }

    const onSubmit = createChatForm.handleSubmit(async (value) => {
        const isExist = await checkAccount.mutateAsync({
            params: {
                phoneNumber: Number(value.phoneNumber)
            }
        })

        if (!isExist.data?.exist) {
            setError("Пользователя с таким номером телефона не существует");
            return;
        }

        handleCloseModal()
        setInterlocutor(value.phoneNumber)
        navigate(`?chatId=${isExist.data.chatId}`)
    })

    useEffect(() => {
        setError(null);
    }, [phoneNumber]);

    return {
        states: { error },
        form: createChatForm,
        functions: { handleCloseModal, onSubmit }
    }
}