import { instance } from '../../instance';
import {getApiTokenInstance} from "../../../../utils/helpers";
import type {ResponseSendMessage} from "../../types";

export interface PostSendMessageParams {
    chatId: string;
    message: string;
}

export type PostSendMessageConfig = RequestConfig<PostSendMessageParams>;

export const postSendMessage = async ({ config, params }: PostSendMessageConfig) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.post<ResponseSendMessage>(
        `/sendMessage/${apiTokenInstance}`,
        params,
        config
    );
};