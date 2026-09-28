import { z } from "zod";

export const StateInstanceSchema = z.object({
    stateInstance: z.string()
});

export type StateInstance = z.infer<typeof StateInstanceSchema>;