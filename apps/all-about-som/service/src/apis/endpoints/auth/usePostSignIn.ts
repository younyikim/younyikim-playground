import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from '@younyikim/ui';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpotins';

// Utils
import { routes } from '@utils/router';
import { IS_AUTH_KEY } from '@utils/constant';

// Typings
import { SignInParams } from '@apis/endpoints/auth/typings';

const mutationFn = (params: SignInParams) => {
  return http.post<SignInParams>(apiEndpoints.auth.signIn, {
    userId: params.id,
    password: params.password,
  });
};

export const usePostSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn,
    onSuccess: () => {
      localStorage.setItem(IS_AUTH_KEY, 'true');
      navigate(routes.admin.status);
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: '로그인 실패',
        titleClassName: 'text-xl',
        description: '다시 시도해주세요.',
        descriptionClassName: 'text-lg',
      });
    },
  });
};
