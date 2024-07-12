import { QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const MAX_RETRY = 2;
const HTTP_STATUS_TO_NOT_RETRY = [400, 401, 403, 404];

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24시간
      staleTime: 1000 * 60 * 60 * 24, // 24시간
      retry: (failureCount, error) => {
        if (failureCount > MAX_RETRY) return false;

        // 응답 코드가 4xx인 경우, 재시도하지 않음
        if (
          isAxiosError(error) &&
          HTTP_STATUS_TO_NOT_RETRY.includes(error.response?.status ?? 0)
        )
          return false;

        return true;
      },
    },
  },
});
