import { ForwardedRef, forwardRef } from 'react';

// Hooks
import useLanding from '@pages/landing/hooks/useLanding';

// Utils
import { Images } from '@utils/image';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { currentImage } = useLanding();

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full flex-col items-center"
    >
      <div className="absolute left-1/2 top-1/2 flex h-[56vh] w-3/4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-slate-200">
        {/* 이미지 컨테이너 */}
        <div className="absolute left-1/2 top-1/2 flex h-[56vh] w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded-full bg-slate-200">
          <img
            src={currentImage}
            alt="Landing Images"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        {/* 타이틀 텍스트 */}
        <div className="absolute -top-52 flex w-fit flex-col items-center justify-center overflow-visible">
          <p className="font-gulf text-blue whitespace-nowrap text-4xl">
            ALL ABOUT
          </p>
          <p className="font-gulf text-blue whitespace-nowrap text-4xl">
            MY LITTLE DOG
          </p>
        </div>
        {/* 별 아이콘 */}
        <div className="absolute -top-52 left-0">
          <img src={Images.star} alt="Star" />
        </div>
        <div className="absolute -left-28 top-64 z-0">
          <img src={Images.starLg} alt="Star" />
        </div>
        <div className="absolute -right-24 top-1/3 z-0">
          <img src={Images.starLg} alt="Star" />
        </div>
        {/* 회전 스티커 */}
        <div className="animate-spin-slow absolute -bottom-20 -left-10">
          <img src={Images.sticker} alt="Circle Sticker" />
        </div>
      </div>
      {/* 하단 원형 아이콘 */}
      <div className="dots">
        <img src={Images.circle} alt="Circle image" />
        <img src={Images.circle} alt="Circle image" />
      </div>
      {/* 배경 */}
      <div className="flex h-full w-full flex-col">
        <div className="bg-pink h-1/2 px-16" />
        <div className="bg-yellow h-1/2 w-full px-16" />
      </div>
    </section>
  );
});

export default index;
