import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetChatsQuery} from "../../../../../shared/api/hooks";

export const useChatList = (setInterlocutor: (interlocutor: string|null) => void) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const chats = useGetChatsQuery().data?.data.filter(
        (chat) => chat.type === "user"
    );

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleChatClick = (chatId: string) => {
        setSearchParams({chatId});
    }

    const selectedChatId = searchParams.get("chatId");

    useEffect(() => {
        if (!chats || chats.length === 0) return;

        setInterlocutor(chats?.find((chat) => chat.chatId === selectedChatId)?.name || null)
    }, [selectedChatId, chats])

    return {
        states: { chats, isOpen, selectedChatId },
        functions: { handleOpen, handleClose, handleChatClick }
    }
}