import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpotins';

// Utils
import { routes } from '@utils/router';

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
      navigate(routes.admin.status);
    },
  });
};
