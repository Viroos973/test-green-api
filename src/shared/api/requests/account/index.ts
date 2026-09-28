import { instance } from '../../instance';
import {getApiTokenInstance} from "../../../../utils/helpers";
import type {ResponseCheckAccount} from "../../types";

export interface PostCheckAccountParams {
    phoneNumber: number;
}

export type PostCheckAccountConfig = RequestConfig<PostCheckAccountParams>;

export const postCheckAccount = async ({ config, params }: PostCheckAccountConfig) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.post<ResponseCheckAccount>(
        `/checkAccount/${apiTokenInstance}`,
        params,
        config
    );
};