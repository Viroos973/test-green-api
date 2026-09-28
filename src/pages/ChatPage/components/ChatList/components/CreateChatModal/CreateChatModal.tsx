import {useCreateChatModal} from "./hooks/useCreateChatModal.ts";
import {CustomModal, PhoneInput} from "../../../../../../shared/components";
import {Button, Typography} from "@maxhub/max-ui";
import {Controller} from "react-hook-form";

interface CreateChatModalProps {
    isOpen: boolean,
    closeModal: () => void,
    setInterlocutor: (interlocutor: string|null) => void
}

export const CreateChatModal = ({ isOpen, closeModal, setInterlocutor }: CreateChatModalProps) => {
    const { states, form, functions } = useCreateChatModal(closeModal, setInterlocutor)

    return (
        <CustomModal isOpen={isOpen} title="Новый чат" closeModal={functions.handleCloseModal}>
            <form onSubmit={functions.onSubmit} className="flex flex-col gap-4">
                <Controller
                    name="phoneNumber"
                    control={form.control}
                    render={({field, fieldState}) => (
                        <div className="w-full">
                            <PhoneInput {...field} />
                            {fieldState.error && (
                                <Typography.Body variant="small" className="text-red-500">
                                    {fieldState.error.message}
                                </Typography.Body>
                            )}
                            {states.error && (
                                <Typography.Body variant="small" className="text-red-500">
                                    {states.error}
                                </Typography.Body>
                            )}
                        </div>
                    )}
                />
                <Button stretched>Начать общение</Button>
            </form>
        </CustomModal>
    )
};