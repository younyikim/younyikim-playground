import { Images } from '@utils/image';

const index = () => {
  return (
    <div className="relative flex min-h-[40rem] w-full overflow-visible">
      {/* 1번 카드 */}
      <div className="bg-pink absolute -left-1/3 top-20 z-0 h-[30rem] min-w-[75%] -rotate-[3deg] border border-black" />
      {/* 3번 카드 */}
      <div className="bg-pink absolute -right-1/3 top-40 z-0 h-[30rem] min-w-[75%] -rotate-6 border border-black" />
      {/* 2번 카드 */}
      <div className="z-1 absolute left-1/2 h-[40rem] min-w-[75%] -translate-x-1/2 transform border border-black bg-white p-16">
        <img
          src={Images.landing2}
          alt="About Image"
          className="h-auto w-full object-cover"
          width="640"
          height="360"
        />
      </div>
    </div>
  );
};

export default index;
