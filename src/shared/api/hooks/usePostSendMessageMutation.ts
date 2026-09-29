import { useMutation } from '@tanstack/react-query';

import {postSendMessage, type PostSendMessageConfig} from "../requests/message";

export const usePostSendMessageMutation = (
    settings?: MutationSettings<PostSendMessageConfig, typeof postSendMessage>
) =>
    useMutation({
        mutationKey: ['postSendMessage'],
        mutationFn: ({ params, config }) =>
            postSendMessage({ params, config: { ...settings?.config, ...config } }),
        ...settings?.options
    });