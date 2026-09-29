import { instance } from '../../instance';
import type {StateInstance} from "../../types";
import {getApiTokenInstance} from "../../../../utils/helpers";

export type GetStateInstanceConfig = RequestConfig;

export const getStateInstance = async ({ config }: GetStateInstanceConfig) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.get<StateInstance>(
        `/getStateInstance/${apiTokenInstance}`,
        config
    );
};