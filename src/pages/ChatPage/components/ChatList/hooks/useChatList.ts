import {useNavigate} from "react-router-dom";

export const useChatList = () => {
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

    const handleChatClick = (chatId: string) => {
        navigate(`?chatId=${chatId}`);
    }

    return {
        states: { chats },
        functions: { handleChatClick }
    }
}