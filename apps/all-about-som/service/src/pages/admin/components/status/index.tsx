import AdminNav from '@pages/admin/components/nav';

const index = () => {
  return (
    <section className="scrollbar-hide flex h-svh w-full flex-col items-center justify-center overflow-hidden bg-white px-20">
      <AdminNav title="Status 수정" />
      Status 관리자 페이지
    </section>
  );
};

export default index;
