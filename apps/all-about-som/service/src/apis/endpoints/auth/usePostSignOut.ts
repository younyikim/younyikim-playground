import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from '@younyikim/ui';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpoints';

// Utils
import { routes } from '@utils/router';
import { IS_AUTH_KEY } from '@utils/constant';

// Typings
import { SuccessDto } from '@apis/endpoints/typings';

const mutationFn = () => {
  return http.post<SuccessDto>(apiEndpoints.auth.signOut);
};

export const usePostSignOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn,
    onSuccess: () => {
      localStorage.removeItem(IS_AUTH_KEY);
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
