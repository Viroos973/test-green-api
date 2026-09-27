import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createChatSchema, type CreateChatSchema} from "../constants/CreateChatSchema.ts";

export const useCreateChatModal = (closeModal: () => void) => {
    const createChatForm = useForm<CreateChatSchema>({
        resolver: zodResolver(createChatSchema),
        defaultValues: {
            phoneNumber: ''
        }
    });

    const handleCloseModal = () => {
        createChatForm.reset();
        closeModal();
    }

    const onSubmit = createChatForm.handleSubmit(async (value) => {
        console.log(value);
        handleCloseModal()
    })

    return {
        form: createChatForm,
        functions: { handleCloseModal, onSubmit }
    }
}