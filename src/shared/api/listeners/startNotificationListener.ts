import type {ResponseReceiveNotification} from "../types";
import {getReceiveNotification} from "../requests/notification/receive";
import {deleteNotification} from "../requests/notification/delete";

export const startNotificationListener = (
    onNotification: (notification: ResponseReceiveNotification) => void
) => {
    const controller = new AbortController();

    const listen = async () => {
        while (!controller.signal.aborted) {
            try {
                const response = await getReceiveNotification({
                    config: {
                        signal: controller.signal
                    }
                });

                if (controller.signal.aborted) {
                    return;
                }

                const notification = response.data;

                if (!notification) {
                    continue;
                }

                onNotification(notification);

                await deleteNotification({
                    params: {
                        receiptId: notification.receiptId
                    }
                });
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }

                console.error('Notification listener error:', error);
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        }
    };

    void listen();

    return () => {
        controller.abort();
    };
};