import * as z from "zod";

export const loginSchema = z.object({
    idInstance: z.string().min(1, 'Поле должно быть заполнено'),
    apiTokenInstance: z.string().min(1, 'Поле должно быть заполнено')
});

export type LoginSchema = z.infer<typeof loginSchema>;