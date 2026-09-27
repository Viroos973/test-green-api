import {useCreateChatModal} from "./hooks/useCreateChatModal.ts";
import {CustomModal, PhoneInput} from "../../../../../../shared/components";
import {Button, Typography} from "@maxhub/max-ui";
import {Controller} from "react-hook-form";

interface CreateChatModalProps {
    isOpen: boolean,
    closeModal: () => void
}

export const CreateChatModal = ({ isOpen, closeModal }: CreateChatModalProps) => {
    const { form, functions } = useCreateChatModal(closeModal)

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
                        </div>
                    )}
                />
                <Button stretched>Начать общение</Button>
            </form>
        </CustomModal>
    )
};