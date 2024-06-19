import { Player } from '@lottiefiles/react-lottie-player';

// Hooks
import useTitleHook from './hooks/useTitleHook';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const index = () => {
  const { playerRef, intersectionCallback } = useTitleHook();

  useIntersectionObserver(intersectionCallback);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* 상단 콘텐츠 */}
      <div className="observe-target relative flex w-full flex-col items-center justify-center py-20">
        {/* 제목 */}
        <div className="flex w-full items-start justify-start px-40">
          <span className="letter">A</span>
          <span className="letter">B</span>
          <span className="letter">O</span>
          <span className="letter">U</span>
          <span className="letter">T</span>
        </div>
        <div className="flex w-full items-start justify-start px-40">
          <span className="letter">S</span>
          <span className="letter">O</span>
          <span className="letter">M</span>
        </div>
        {/* Lottie */}
        <div className="lottie transfrom absolute -bottom-16 left-10 hidden w-[25rem] rotate-180">
          <Player
            ref={playerRef}
            autoplay={false}
            loop={false}
            keepLastFrame={true}
            src={'/lottie/lineLottie.json'}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
