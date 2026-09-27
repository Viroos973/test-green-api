import {ChatList} from "./components/ChatList/ChatList.tsx";
import {Flex, Panel} from "@maxhub/max-ui";
import {ChatArea} from "./components/ChatArea/ChatArea.tsx";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

const ChatPage = () => {
    const [interlocutor, setInterlocutor] = useState<string|null>(null);
    const [searchParams] = useSearchParams();

    const chatId = searchParams.get("chatId");
    const isChat = !!chatId;

    return (
        <Panel mode="secondary">
            <Flex className="h-full">
                <aside className={`w-full md:w-100 h-full shrink-0 bg-[var(--background-card)] shadow-md z-10 ${isChat 
                    ? "hidden md:block" 
                    : "block"}`}
                >
                    <ChatList setInterlocutor={setInterlocutor}/>
                </aside>
                <main className={`flex-1 h-full ${isChat ? "block" : "hidden md:block"}`}>
                    <ChatArea title={interlocutor || ""} isChat={isChat} />
                </main>
            </Flex>
        </Panel>
    )
}

export default ChatPage