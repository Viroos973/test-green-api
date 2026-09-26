import {CellList, CellSimple, Flex, IconButton, Typography} from "@maxhub/max-ui";
import { Plus } from 'lucide-react';
import {useChatList} from "./hooks/useChatList.ts";

export const ChatList = () => {
    const {states, functions} = useChatList()

    return (
        <Flex direction="column" className="h-full">
            <CellList filled mode="full-width" className="shrink-0">
                <CellSimple
                    title={
                        <Typography.Headline variant="small">
                            Чаты
                        </Typography.Headline>
                    }
                    after={
                        <IconButton size="small" variant="ghost">
                            <Plus/>
                        </IconButton>
                    }
                />
            </CellList>
            <div className="w-full flex-1 overflow-y-auto">
                <CellList filled mode="full-width">
                    {states.chats.map((chat) => (
                        <CellSimple
                            key={chat.chatId}
                            showChevron
                            onClick={() =>
                                functions.handleChatClick(chat.chatId)
                            }
                            title={
                                <Typography.Headline variant="small">
                                    {chat.name}
                                </Typography.Headline>
                            }
                        />
                    ))}
                </CellList>
            </div>
        </Flex>
    )
}