import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const useChatList = (setInterlocutor: (interlocutor: string|null) => void) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const chats = [
        {
            chatId: "10000000",
            name: "Василиса Премудрая 1",
            type: "user"
        },
        {
            chatId: "10000001",
            name: "Василиса Премудрая 2",
            type: "user"
        },
        {
            chatId: "10000002",
            name: "Василиса Премудрая 3",
            type: "user"
        },
        {
            chatId: "10000003",
            name: "Василиса Премудрая 4",
            type: "user"
        },
        {
            chatId: "10000004",
            name: "Василиса Премудрая 5",
            type: "user"
        }
    ]

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleChatClick = (chatId: string) => {
        setSearchParams({chatId});
    }

    const selectedChatId = searchParams.get("chatId");

    useEffect(() => {
        setInterlocutor(chats.find((chat) => chat.chatId === selectedChatId)?.name || null)
    }, [selectedChatId])

    return {
        states: { chats, isOpen, selectedChatId },
        functions: { handleOpen, handleClose, handleChatClick }
    }
}