// Apis
import { usePostSignIn } from '@apis/endpoints/auth/usePostSignIn';

// Typings
import { SignInParams } from '@apis/endpoints/auth/typings';

const useSignIn = () => {
  const { mutate } = usePostSignIn();

  // 로그인 버튼 핸들러
  const handleSubmit = (data: SignInParams) => {
    mutate(data);
  };
  return { handleSubmit };
};

export default useSignIn;
