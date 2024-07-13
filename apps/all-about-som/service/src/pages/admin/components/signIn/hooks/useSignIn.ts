import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Apis
import { usePostSignIn } from '@apis/endpoints/auth/usePostSignIn';

// Utils
import { routes } from '@utils/router';
import { IS_AUTH_KEY } from '@utils/constant';

// Typings
import { SignInParams } from '@apis/endpoints/auth/typings';

const useSignIn = () => {
  const navigate = useNavigate();

  // 유저의 로그인 여부 확인
  const isAuth = localStorage.getItem(IS_AUTH_KEY);

  const { mutate } = usePostSignIn();

  useEffect(() => {
    // 로그인한 유저인 경우, 관리자 메인 페이지로 이동
    if (isAuth) {
      navigate(routes.admin.status);
    }
  }, [isAuth]);

  // 로그인 버튼 핸들러
  const handleSubmit = (data: SignInParams) => {
    mutate(data);
  };
  return { handleSubmit };
};

export default useSignIn;
