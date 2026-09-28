import {useState} from "react";
import {usePostSendMessageMutation} from "../../../../../../../shared/api/hooks";

export const useMessageInput = (onSend: (type: string, idMessage: string, textMessage: string) => void, chatId: string|null) => {
    const [message, setMessage] = useState("");

    const sendMessage = usePostSendMessageMutation()

    const handleSubmit = async () => {
        if (!chatId) return;

        const trimmedMessage = message.trim();
        if (!trimmedMessage) return;

        const idMessage = await sendMessage.mutateAsync({
            params: {
                chatId,
                message: trimmedMessage
            }
        })

        onSend("outgoing", idMessage.data.idMessage, trimmedMessage);
        setMessage("");
    };

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            await handleSubmit();
        }
    };

    return {
        states: { message },
        functions: { handleSubmit, handleKeyDown, setMessage }
    }
}