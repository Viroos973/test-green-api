import { instance } from '../../instance';
import {getApiTokenInstance} from "../../../../utils/helpers";
import type {ChatHistory} from "../../types";

export interface GetChatHistoryParams {
    chatId: string;
}

export type GetChatHistoryConfig = RequestConfig<GetChatHistoryParams>;

export const getChatHistory = async ({ config, params }: GetChatHistoryConfig) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.post<ChatHistory[]>(
        `/getChatHistory/${apiTokenInstance}`,
        params,
        config
    );
};