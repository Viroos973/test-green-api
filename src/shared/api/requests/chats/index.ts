import { instance } from '../../instance';
import {getApiTokenInstance} from "../../../../utils/helpers";
import type {Chat} from "../../types";

export type GetChatsConfig = RequestConfig;

export const getChats = async ({ config }: GetChatsConfig) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.get<Chat[]>(
        `/getChats/${apiTokenInstance}`,
        config
    );
};