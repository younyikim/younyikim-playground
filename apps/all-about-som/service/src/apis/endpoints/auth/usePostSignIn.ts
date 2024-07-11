import { useMutation } from '@tanstack/react-query';

// Apis
import { http } from '@apis/axios';
import { apiEndpoints } from '@apis/endpoints/apiEndpotins';

import { SignInParams } from '@apis/endpoints/auth/typings';

const mutationFn = (params: SignInParams) => {
  return http.post<SignInParams>(apiEndpoints.auth.signIn, {
    userId: params.id,
    password: params.password,
  });
};

export const usePostSignIn = () => {
  return useMutation({
    mutationFn,
  });
};
