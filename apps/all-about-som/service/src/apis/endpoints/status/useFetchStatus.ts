import { useQuery } from '@tanstack/react-query';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpoints';
import { queryKeys } from '@apis/endpoints/query.key';

// Typings
import { SuccessDto } from '@apis/endpoints/typings';
import { StatusType } from '@pages/status/typings';

type StatusResponse = {
  status: StatusType;
};

const queryFn = () => {
  return http.get<SuccessDto<StatusResponse>>(apiEndpoints.admin.status);
};
export const useFetchStatus = () => {
  return useQuery({
    queryKey: queryKeys.status,
    queryFn,
    select: (data) => data.data.status,
  });
};
