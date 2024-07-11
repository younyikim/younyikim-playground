import { SignInForm } from '@younyikim/ui';

const index = () => {
  return (
    <div className="scrollbar-hide h-real-screen flex w-full flex-col items-center justify-center overflow-hidden px-20">
      <h3 className="text-3xl font-bold">관리자 로그인</h3>
      <SignInForm
        onSubmit={() => {
          console.log('로그인');
        }}
      />
    </div>
  );
};

export default index;
