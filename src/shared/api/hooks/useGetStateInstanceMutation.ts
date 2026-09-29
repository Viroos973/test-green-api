import {useMutation} from '@tanstack/react-query';

import {getStateInstance, type GetStateInstanceConfig} from "../requests/stateInstance";

export const useGetStateInstanceMutation = (settings?: MutationSettings<GetStateInstanceConfig, typeof getStateInstance>) =>
    useMutation({
        mutationKey: ['getStateInstance'],
        mutationFn: () => getStateInstance({ config: settings?.config }),
        ...settings?.options
    });