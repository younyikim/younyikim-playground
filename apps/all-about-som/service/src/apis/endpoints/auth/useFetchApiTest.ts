import { http } from '@apis/axios';
import { queryKeys } from '@apis/endpoints';
import { useQuery } from '@tanstack/react-query';

const queryFn = () => {
  return http.get('/api');
};

export const useFetchApiTest = () => {
  return useQuery({ queryKey: queryKeys.status, queryFn });
};
