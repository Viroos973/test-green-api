import { useQuery } from '@tanstack/react-query';

import {getChatHistory, type GetChatHistoryParams} from "../requests/chatHistory";

export const useGetChatHistoryQuery = (
    params: GetChatHistoryParams,
    settings?: QuerySettings<typeof getChatHistory>
) =>
    useQuery({
        queryKey: ['getChatHistory', params.chatId],
        queryFn: () => getChatHistory({ params, config: settings?.config }),
        ...settings?.options
    });