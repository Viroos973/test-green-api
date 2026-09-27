import * as z from "zod";

export const createChatSchema = z.object({
    phoneNumber: z.string().regex(/^\+?\d{11}$/, "Введите корректный номер телефона")
});

export type CreateChatSchema = z.infer<typeof createChatSchema>;