import { z } from "zod";

export const ResponseCheckAccountSchema = z.object({
    exist: z.boolean(),
    chatId: z.string()
});

export type ResponseCheckAccount = z.infer<typeof ResponseCheckAccountSchema>;