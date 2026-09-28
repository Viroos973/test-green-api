import {useEffect, useRef} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useGetChatHistoryQuery} from "../../../../../shared/api/hooks";
import type {ChatHistory} from "../../../../../shared/api/types";

export const useChatArea = (displayMessages: ChatHistory[], setDisplayMessages: React.Dispatch<React.SetStateAction<ChatHistory[]>>) => {
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const chatId = searchParams.get("chatId");
    const messages = useGetChatHistoryQuery({
        chatId: chatId || ""
    }, {
        options: {
            enabled: !!chatId
        }
    }).data?.data

    const clearSearchParams = () => {
        setSearchParams({});
    };

    const handleAddMessage = (type: string, idMessage: string, textMessage: string) => {
        const message = {
            type,
            idMessage,
            timestamp: Math.floor(Date.now() / 1000),
            typeMessage: "textMessage",
            textMessage
        }

        setDisplayMessages(prev => [...prev, message])
    }

    const logout = () => {
        localStorage.removeItem("idInstance");
        localStorage.removeItem("apiTokenInstance");
        navigate("/login")
    }

    useEffect(() => {
        const container = messagesContainerRef.current;

        if (!container) return;

        container.scrollTop = container.scrollHeight;
    }, [displayMessages]);

    useEffect(() => {
        setDisplayMessages(
            messages
                ?.filter((message) => message.typeMessage === "textMessage")
                .toReversed() || []
        );
    }, [messages]);

    return {
        states: { displayMessages, messagesContainerRef, chatId },
        functions: { handleAddMessage, clearSearchParams, logout }
    }
}