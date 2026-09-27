import {Button, CellSimple, Flex, IconButton, Typography} from "@maxhub/max-ui";
import {useChatArea} from "./hooks/useChatArea.ts";
import {MessageBubble} from "./components";
import {MessageInput} from "./components/MessageInput/MessageInput.tsx";
import {ChevronLeft} from "lucide-react";

interface ChatAreaProps {
    title: string,
    isChat: boolean
}

export const ChatArea = ({ title, isChat }: ChatAreaProps) => {
    const { states, functions } = useChatArea()

    return (
        <Flex direction="column" className="relative h-full min-h-0">
            <CellSimple className="!bg-[var(--background-card)] shadow-md"
                        title={title}
                        after={
                            <Button size="small" variant="ghost">
                                <Typography.Headline variant="small" className="text-red-500">
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
                <MessageInput onSend={functions.handleAddMessage} />
            )}
        </Flex>
)
}