import {ChatList} from "./components/ChatList/ChatList.tsx";
import {Flex, Panel} from "@maxhub/max-ui";

const ChatPage = () => {
    return (
        <Panel mode="secondary">
            <Flex className="h-full">
                <aside className="w-100 h-full shrink-0 bg-[var(--background-card)] shadow-md">
                    <ChatList/>
                </aside>
                <main className="flex-1">
                    {/* Сам чат */}
                </main>
            </Flex>
        </Panel>
    )
}

export default ChatPage