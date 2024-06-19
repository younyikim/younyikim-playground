import { ForwardedRef, forwardRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Hooks
import useAbout from './hooks/useAbout';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

// Utils
import { Images } from '@utils/image';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { playerRef, intersectionCallback } = useAbout();

  useIntersectionObserver(intersectionCallback);

  return (
    <section
      ref={ref}
      className="bg-yellow relative flex h-screen w-full flex-col items-center"
    >
      <div className="flex w-full flex-col items-center justify-center">
        {/* 상단 콘텐츠 */}
        <div className="observe-target relative flex w-full flex-col items-center justify-center py-20">
          <div className="lottie absolute -top-10 left-0 hidden w-[20rem]">
            <Player
              ref={playerRef}
              autoplay={false}
              loop={false}
              keepLastFrame={true}
              src={'/lottie/lineLottie.json'}
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
          </div>
          {/* 제목 */}
          <div className="flex w-full items-start justify-start px-40">
            <span className="letter">H</span>
            <span className="letter">E</span>
            <span className="letter">Y</span>
          </div>
          <div className="flex w-full items-start justify-start px-40">
            <span className="letter">T</span>
            <span className="letter">H</span>
            <span className="letter">E</span>
            <span className="letter">R</span>
            <span className="letter">E</span>
            <span className="letter">!</span>
          </div>
          {/* 콘텐츠 */}
          <div></div>
        </div>
        {/* 하단 이미지 카드*/}
        <div></div>
      </div>
      {/* 하단 원형 아이콘 */}
      <div className="dots">
        <img src={Images.circle} alt="Circle image" />
        <img src={Images.circle} alt="Circle image" />
      </div>
    </section>
  );
});

export default index;
