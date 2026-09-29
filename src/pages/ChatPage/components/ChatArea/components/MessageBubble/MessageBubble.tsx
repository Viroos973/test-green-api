import { Typography } from "@maxhub/max-ui"

interface MessageBubbleProps {
    type: string,
    timestamp: number,
    textMessage: string
}

export const MessageBubble = ({ type, timestamp, textMessage }: MessageBubbleProps) => (
    <div className={`flex ${type === "outgoing" ? "justify-end" : "justify-start"}`}>
        <div className={`max-w-[70%] rounded-2xl px-3 py-2 ${type === "outgoing"
            ? "bg-blue-100"
            : "bg-[var(--background-card)]"}`}
        >
            <div className="flex items-end gap-2">
                <Typography.Body style={{ overflowWrap: "anywhere" }}>{textMessage}</Typography.Body>
                <span className="text-xs text-black/40">
                    {new Date(timestamp * 1000).toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </span>
            </div>
        </div>
    </div>
)