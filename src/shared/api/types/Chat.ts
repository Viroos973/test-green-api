import { z } from "zod";

export const ChatSchema = z.object({
    chatId: z.string(),
    name: z.string(),
    type: z.string()
});

export type Chat = z.infer<typeof ChatSchema>;