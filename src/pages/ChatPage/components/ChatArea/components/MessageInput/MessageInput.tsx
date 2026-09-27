import {IconButton, Input} from "@maxhub/max-ui";
import {Send} from "lucide-react";
import {useMessageInput} from "./hooks/MessageInput.ts";

interface MessageInputProps {
    onSend: (type: string, idMessage: string, textMessage: string) => void
}

export const MessageInput = ({ onSend }: MessageInputProps) => {
    const { states, functions } = useMessageInput(onSend)

    return (
        <div className="absolute bottom-0 w-full py-3 px-8 flex items-center gap-2">
            <div className="flex-1">
                <Input
                    value={states.message}
                    onChange={(event) => functions.setMessage(event.target.value)}
                    onKeyDown={functions.handleKeyDown}
                    placeholder="Написать сообщение..."
                    type="text" className="!bg-white shadow-md"
                />
            </div>
            <IconButton
                onClick={functions.handleSubmit}
                disabled={!states.message.trim()}
            >
                <Send size={18}/>
            </IconButton>
        </div>
    )
}