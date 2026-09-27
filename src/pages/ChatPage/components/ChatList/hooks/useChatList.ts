import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const useChatList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const chats = [
        {
            chatId: "10000000",
            name: "Василиса Премудрая",
            type: "user"
        },
        {
            chatId: "10000000",
            name: "Василиса Премудрая",
            type: "user"
        },
        {
            chatId: "10000000",
            name: "Василиса Премудрая",
            type: "user"
        },
        {
            chatId: "10000000",
            name: "Василиса Премудрая",
            type: "user"
        },
        {
            chatId: "10000000",
            name: "Василиса Премудрая",
            type: "user"
        }
    ]

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleChatClick = (chatId: string) => {
        navigate(`?chatId=${chatId}`);
    }

    return {
        states: { chats, isOpen },
        functions: { handleOpen, handleClose, handleChatClick }
    }
}