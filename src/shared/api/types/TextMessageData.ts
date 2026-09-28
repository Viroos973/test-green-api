import { z } from "zod";

export const TextMessageDataSchema = z.object({
    textMessage: z.string(),
});