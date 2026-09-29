import { z } from "zod";

export const ChatHistorySchema = z.object({
    type: z.string(),
    idMessage: z.string(),
    timestamp: z.number(),
    typeMessage: z.string(),
    textMessage: z.string()
});

export type ChatHistory = z.infer<typeof ChatHistorySchema>;