import { useMutation } from '@tanstack/react-query';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpoints';

type StatusParams = {
  statusValue: string;
};

const mutationFn = (params: StatusParams) => {
  return http.patch(apiEndpoints.admin.status, params);
};

export const usePatchStatus = () => {
  return useMutation({
    mutationFn,
    onSuccess: () => {
      alert('저장되었습니다.');
    },
    onError: () => {
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
