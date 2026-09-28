import {Button, CellSimple, Flex, IconButton, Typography} from "@maxhub/max-ui";
import {useChatArea} from "./hooks/useChatArea.ts";
import {MessageBubble} from "./components/MessageBubble";
import {MessageInput} from "./components/MessageInput";
import {ChevronLeft} from "lucide-react";
import type {ChatHistory} from "../../../../shared/api/types";

interface ChatAreaProps {
    title: string,
    isChat: boolean,
    displayMessages: ChatHistory[];
    setDisplayMessages: React.Dispatch<React.SetStateAction<ChatHistory[]>>;
}

export const ChatArea = ({ title, isChat, displayMessages, setDisplayMessages }: ChatAreaProps) => {
    const { states, functions } = useChatArea(displayMessages, setDisplayMessages)

    return (
        <Flex direction="column" className="relative h-full min-h-0">
            <CellSimple className="!bg-[var(--background-card)] shadow-md"
                        title={title}
                        after={
                            <Button size="small" variant="ghost">
                                <Typography.Headline variant="small" className="text-red-500" onClick={functions.logout}>
                                    Выйти
                                </Typography.Headline>
                            </Button>
                        }
                        before={
                            isChat && (
                                <IconButton size="small" variant="ghost" onClick={functions.clearSearchParams}>
                                    <ChevronLeft />
                                </IconButton>
                            )
                        }/>
            <div ref={states.messagesContainerRef} className="flex-1 w-full overflow-y-auto p-4">
                <div className="flex min-h-full flex-col justify-end gap-2 pb-15">
                    {states.displayMessages.map(message => (
                        <MessageBubble key={message.idMessage} {...message} />
                    ))}
                </div>
            </div>
            {isChat && (
                <MessageInput onSend={functions.handleAddMessage} chatId={states.chatId} />
            )}
        </Flex>
)
}