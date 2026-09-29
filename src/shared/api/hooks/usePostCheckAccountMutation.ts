import { useMutation } from '@tanstack/react-query';

import {postCheckAccount, type PostCheckAccountConfig} from "../requests/account";

export const usePostCheckAccountMutation = (
    settings?: MutationSettings<PostCheckAccountConfig, typeof postCheckAccount>
) =>
    useMutation({
        mutationKey: ['postCheckAccount'],
        mutationFn: ({ params, config }) =>
            postCheckAccount({ params, config: { ...settings?.config, ...config } }),
        ...settings?.options
    });