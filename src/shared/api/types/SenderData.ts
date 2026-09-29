import { z } from "zod";

export const SenderDataSchema = z.object({
    chatId: z.string(),
});