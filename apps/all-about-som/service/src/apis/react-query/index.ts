import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24시간
      staleTime: 1000 * 60 * 60 * 24, // 24시간
    },
  },
});
