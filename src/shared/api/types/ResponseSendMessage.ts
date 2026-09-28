import { z } from "zod";

export const ResponseSendMessageSchema = z.object({
    idMessage: z.string()
});

export type ResponseSendMessage = z.infer<typeof ResponseSendMessageSchema>;