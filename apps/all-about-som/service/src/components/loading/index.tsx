import { useEffect } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import loadingLottie from '@public/lottie/loadingLottie.json';

const index = () => {
  useEffect(() => {
    const container = document.querySelector('#loading-lottie');

    if (container) {
      const instance = lottie.loadAnimation({
        container: container,
        animationData: loadingLottie,
        autoplay: true,
        loop: true,
        renderer: 'svg',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      });

      return () => instance.destroy();
    }
  }, []);

  return (
    <div className="bg-pink flex h-full w-full items-center justify-center">
      <div className="lottie">
        <div id="loading-lottie" />
      </div>
    </div>
  );
};

export default index;
