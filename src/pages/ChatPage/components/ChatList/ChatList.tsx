import {CellList, CellSimple, Flex, IconButton, Typography} from "@maxhub/max-ui";
import { Plus } from 'lucide-react';
import {useChatList} from "./hooks/useChatList.ts";
import {CreateChatModal} from "./components";

interface ChatListProps {
    setInterlocutor: (interlocutor: string|null) => void
}

export const ChatList = ({ setInterlocutor }: ChatListProps) => {
    const {states, functions} = useChatList(setInterlocutor)

    return (
        <>
            <Flex direction="column" className="h-full">
                <CellList filled mode="full-width">
                    <CellSimple
                        title={
                            <Typography.Headline variant="small">
                                Чаты
                            </Typography.Headline>
                        }
                        after={
                            <IconButton size="small" variant="ghost" onClick={functions.handleOpen}>
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
                                    <Typography.Body>
                                        {chat.name}
                                    </Typography.Body>
                                }
                                className={states.selectedChatId === chat.chatId ? "!bg-blue-100" : ""}
                            />
                        ))}
                    </CellList>
                </div>
            </Flex>
            <CreateChatModal isOpen={states.isOpen} closeModal={functions.handleClose} />
        </>
    )
}