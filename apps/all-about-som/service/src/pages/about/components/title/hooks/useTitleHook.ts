import { useCallback, useEffect } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import lineLottie from '@public/lottie/lineLottie.json';

const useTitleHook = () => {
  useEffect(() => {
    const container = document.querySelector('#line-lottie');

    if (container) {
      const instance = lottie.loadAnimation({
        container: container,
        animationData: lineLottie,
        autoplay: true,
        loop: false,
        renderer: 'svg',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      });

      return () => instance.destroy();
    }
  }, []);

  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      if (isIntersecting) {
        target.querySelectorAll('.letter').forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('animate-reveal');
          }, index * 100); // Adjust delay between letters as needed
        });

        // Lottie 표시 및 재생
        lottie.play();

        target.querySelector('.lottie')?.classList.remove('hidden');
      } else {
        target.querySelectorAll('.letter').forEach((letter) => {
          letter.classList.remove('animate-reveal');
        });

        // Lottie 숨김
        lottie.stop();

        target.querySelector('.lottie')?.classList.add('hidden');
      }
    },
    [],
  );

  return { intersectionCallback };
};

export default useTitleHook;
