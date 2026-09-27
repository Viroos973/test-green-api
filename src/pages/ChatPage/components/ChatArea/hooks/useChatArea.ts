import {useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

export const useChatArea = () => {
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const [displayMessages, setDisplayMessages] = useState([].reverse());
    const [searchParams, setSearchParams] = useSearchParams();

    const clearSearchParams = () => {
        setSearchParams({});
    };

    const handleAddMessage = (type: string, idMessage: string, textMessage: string) => {
        const message = {
            type,
            idMessage,
            timestamp: Math.floor(Date.now() / 1000),
            textMessage
        }

        setDisplayMessages(prev => [...prev, message])
    }

    useEffect(() => {
        const container = messagesContainerRef.current;

        if (!container) return;

        container.scrollTop = container.scrollHeight;
    }, [displayMessages]);

    return {
        states: { displayMessages, messagesContainerRef },
        functions: { handleAddMessage, clearSearchParams }
    }
}