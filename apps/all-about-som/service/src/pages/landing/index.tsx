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
      className="bg-pink relative flex h-screen w-full flex-col items-center pt-[7.8rem]"
    >
      {/* 배경 */}
      <div className="flex h-full w-full flex-col">
        <div className="bg-pink relative h-1/2 px-16">
          {/* 타이틀 텍스트 */}
          <div className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center overflow-visible">
            <p className="font-gulf whitespace-nowrap text-6xl text-white">
              ALL ABOUT
            </p>
            <p className="font-gulf whitespace-nowrap text-6xl text-white">
              MY DOG
            </p>
          </div>

          {/* 별 아이콘 */}
          <div className="absolute top-1/2 z-0">
            <img src={Images.starLg} alt="Star" />
          </div>
          <div className="absolute right-16 top-1/4 z-0">
            <img src={Images.starLg} alt="Star" />
          </div>

          <div className="absolute -bottom-1/4 left-1/2 flex h-[18vh] w-3/4 -translate-x-1/2 -translate-y-1/4 transform items-center justify-center overflow-hidden rounded-3xl">
            {/* 이미지 컨테이너 */}
            <img
              src={currentImage}
              alt="Landing Images"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          {/* 회전 스티커 */}
          <div className="animate-spin-slow absolute -bottom-1/4 left-10">
            <img width={80} src={Images.sticker} alt="Circle Sticker" />
          </div>
          {/* 말티즈 스티커 */}
          <div className="animate-heartbeat absolute -bottom-1/4 right-10">
            <img src={Images.maltese} alt="Maltese Sticker" />
          </div>
        </div>
        <div className="bg-yellow flex h-1/2 w-full flex-col justify-between px-16">
          {/* 타이틀 텍스트 */}
          <div className="flex items-center justify-center pt-96">
            <p className="font-gulf whitespace-nowrap text-6xl text-white">
              SOM
            </p>
          </div>
          {/* 하단 원형 아이콘 */}
          <div className="dots">
            <img src={Images.circle} alt="Circle image" />
            <img src={Images.circle} alt="Circle image" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default index;
