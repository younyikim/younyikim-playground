import { useQuery } from '@tanstack/react-query';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpoints';
import { queryKeys } from '@apis/endpoints/query.key';
import { SuccessDto } from '@apis/endpoints/typings';

type StatusResponse = {
  status: string;
};

const queryFn = () => {
  return http.get<SuccessDto<StatusResponse>>(apiEndpoints.admin.status);
};
export const useFetchStatus = () => {
  return useQuery({ queryKey: queryKeys.status, queryFn });
};
