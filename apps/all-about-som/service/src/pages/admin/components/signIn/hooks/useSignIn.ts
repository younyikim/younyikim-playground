import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Apis
import { usePostSignIn } from '@apis/endpoints/auth/usePostSignIn';
import { useFetchVerify } from '@apis/endpoints';

// Typings
import { SignInParams } from '@apis/endpoints/auth/typings';
import { routes } from '@utils/router';

const useSignIn = () => {
  const navigate = useNavigate();

  const { mutate } = usePostSignIn();
  const { data } = useFetchVerify();

  useEffect(() => {
    // 유저의 로그인 여부 확인
    if (data && data.success) {
      navigate(routes.admin.status);
    }
  }, [data]);

  // 로그인 버튼 핸들러
  const handleSubmit = (data: SignInParams) => {
    mutate(data);
  };
  return { handleSubmit };
};

export default useSignIn;
