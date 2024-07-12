import { useQuery } from '@tanstack/react-query';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpotins';
import { queryKeys } from '@apis/endpoints/query.key';

// Typings
import { SuccessDto } from '@apis/endpoints/typings';

const queryFn = () => {
  return http.get<SuccessDto>(apiEndpoints.auth.verify);
};

export const useFetchVerify = () => {
  return useQuery({
    queryKey: queryKeys.auth.verify,
    queryFn,
  });
};
