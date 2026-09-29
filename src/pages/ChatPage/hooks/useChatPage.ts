import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {ChatHistory} from "../../../shared/api/types";
import {startNotificationListener} from "../../../shared/api/listeners";

export const useChatPage = () => {
    const [interlocutor, setInterlocutor] = useState<string|null>(null);
    const [displayMessages, setDisplayMessages] = useState<ChatHistory[]>([]);
    const [searchParams] = useSearchParams();

    const chatId = searchParams.get("chatId");
    const isChat = !!chatId;

    useEffect(() => {
        const stop = startNotificationListener((notification) => {
            const message = notification.body;

            if (
                message.typeWebhook !== 'incomingMessageReceived' ||
                message.messageData.typeMessage !== 'textMessage' ||
                message.senderData.chatId !== chatId
            ) {
                return;
            }

            const newMessage = {
                type: "incoming",
                idMessage: message.idMessage,
                timestamp: message.timestamp,
                typeMessage: "textMessage",
                textMessage: message.messageData.textMessageData.textMessage
            }

            setDisplayMessages(prev => [...prev, newMessage])
        });

        return () => {
            stop();
        };
    }, []);

    return {
        states: { isChat, interlocutor, displayMessages },
        functions: { setInterlocutor, setDisplayMessages }
    }
}