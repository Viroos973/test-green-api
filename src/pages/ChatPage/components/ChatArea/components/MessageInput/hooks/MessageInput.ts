import {useState} from "react";

export const useMessageInput = (onSend: (type: string, idMessage: string, textMessage: string) => void) => {
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage) return;

        onSend("outgoing", "222222222", trimmedMessage);
        setMessage("");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit();
        }
    };

    return {
        states: { message },
        functions: { handleSubmit, handleKeyDown, setMessage }
    }
}