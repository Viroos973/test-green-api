import { z } from "zod";
import {IncomingMessageReceivedSchema} from "./IncomingMessageReceived.ts";

export const ResponseReceiveNotificationSchema = z.object({
    receiptId: z.number(),
    body: IncomingMessageReceivedSchema
});

export type ResponseReceiveNotification = z.infer<typeof ResponseReceiveNotificationSchema>;