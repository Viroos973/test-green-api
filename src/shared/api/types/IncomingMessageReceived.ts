import { z } from "zod";
import {MessageDataSchema} from "./MessageData.ts";
import {SenderDataSchema} from "./SenderData.ts";

export const IncomingMessageReceivedSchema = z.object({
    typeWebhook: z.string(),
    timestamp: z.number(),
    idMessage: z.string(),
    messageData: MessageDataSchema,
    senderData: SenderDataSchema
});