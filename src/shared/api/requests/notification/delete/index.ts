import { instance } from '../../../instance';
import {getApiTokenInstance} from "../../../../../utils/helpers";

export interface DeleteNotificationParams {
    receiptId: number;
}

export type DeleteNotificationConfig = RequestConfig<DeleteNotificationParams>;

export const deleteNotification = async ({ config, params }: DeleteNotificationConfig) => {
    const apiTokenInstance = getApiTokenInstance();

    return instance.delete(
        `/deleteNotification/${apiTokenInstance}/${params.receiptId}`,
        config
    );
};