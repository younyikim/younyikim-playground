import { SignInForm } from '@younyikim/ui';

// Hooks
import useSignIn from '@pages/admin/components/signIn/hooks/useSignIn';

const index = () => {
  const { handleSubmit } = useSignIn();

  return (
    <section className="scrollbar-hide flex h-svh w-full flex-col items-center justify-center gap-16 overflow-hidden px-20">
      <h3 className="text-3xl font-bold">관리자 로그인</h3>
      <SignInForm onSubmit={handleSubmit} />
    </section>
  );
};

export default index;
