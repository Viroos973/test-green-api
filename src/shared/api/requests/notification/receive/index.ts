import { instance } from '../../../instance';
import type {ResponseReceiveNotification} from "../../../types";
import {getApiTokenInstance} from "../../../../../utils/helpers";

export type GetReceiveNotificationConfig = RequestConfig;

export const getReceiveNotification = async ({ config }: GetReceiveNotificationConfig = {}) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.get<ResponseReceiveNotification>(
        `/receiveNotification/${apiTokenInstance}`,
        config
    );
};