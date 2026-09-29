import { useQuery } from '@tanstack/react-query';

import {getChats} from "../requests/chats";

export const useGetChatsQuery = (settings?: QuerySettings<typeof getChats>) =>
    useQuery({
        queryKey: ['getChats'],
        queryFn: () => getChats({ config: settings?.config }),
        ...settings?.options
    });