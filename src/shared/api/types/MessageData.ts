import { z } from "zod";
import {TextMessageDataSchema} from "./TextMessageData.ts";

export const MessageDataSchema = z.object({
    typeMessage: z.string(),
    textMessageData: TextMessageDataSchema
});