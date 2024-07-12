import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from '@younyikim/ui';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpotins';

// Utils
import { routes } from '@utils/router';

// Typings
import { SuccessDto } from '@apis/endpoints/typings';
import { queryKeys } from '@apis/endpoints/query.key';

const mutationFn = () => {
  return http.post<SuccessDto>(apiEndpoints.auth.signOut);
};

export const usePostSignOut = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.verify });
      navigate(routes.admin.signIn);
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: '로그아웃 실패',
        titleClassName: 'text-xl',
        description: '다시 시도해주세요.',
        descriptionClassName: 'text-lg',
      });
    },
  });
};
