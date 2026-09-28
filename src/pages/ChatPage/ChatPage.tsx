import {Flex, Panel} from "@maxhub/max-ui";
import {ChatList} from "./components/ChatList";
import {ChatArea} from "./components/ChatArea";
import {useChatPage} from "./hooks/useChatPage.ts";

export const ChatPage = () => {
    const { states, functions } = useChatPage()

    return (
        <Panel mode="secondary">
            <Flex className="h-full">
                <aside className={`w-full md:w-100 h-full shrink-0 bg-[var(--background-card)] shadow-md z-10 ${states.isChat 
                    ? "hidden md:block" 
                    : "block"}`}
                >
                    <ChatList setInterlocutor={functions.setInterlocutor}/>
                </aside>
                <main className={`flex-1 h-full ${states.isChat ? "block" : "hidden md:block"}`}>
                    <ChatArea title={states.interlocutor || ""} isChat={states.isChat}
                              displayMessages={states.displayMessages} setDisplayMessages={functions.setDisplayMessages} />
                </main>
            </Flex>
        </Panel>
    )
}