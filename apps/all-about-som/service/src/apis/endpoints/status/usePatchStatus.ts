import { useMutation, useQueryClient } from '@tanstack/react-query';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpoints';
import { queryKeys } from '@apis/endpoints/query.key';

type StatusParams = {
  statusValue: string;
};

const mutationFn = (params: StatusParams) => {
  return http.patch(apiEndpoints.admin.status, params);
};

export const usePatchStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.status });
      alert('저장되었습니다.');
    },
    onError: () => {
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
