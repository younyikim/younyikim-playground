import { SignInForm } from '@younyikim/ui';

// Hooks
import useSignIn from '@pages/admin/components/signIn/hooks/useSignIn';

const index = () => {
  const { handleSubmit } = useSignIn();

  return (
    <div className="scrollbar-hide h-real-screen flex w-full flex-col items-center justify-center overflow-hidden px-20">
      <h3 className="text-3xl font-bold">관리자 로그인</h3>
      <SignInForm onSubmit={handleSubmit} />
    </div>
  );
};

export default index;
