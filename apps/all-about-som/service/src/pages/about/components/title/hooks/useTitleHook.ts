import { useCallback, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const useTitleHook = () => {
  const playerRef = useRef<Player>(null);

  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      if (isIntersecting) {
        target.querySelectorAll('.letter').forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('animate-reveal');
          }, index * 100); // Adjust delay between letters as needed
        });

        // Lottie 표시 및 재생
        if (playerRef.current) {
          playerRef.current?.play();
        }

        target.querySelector('.lottie')?.classList.remove('hidden');
      } else {
        target.querySelectorAll('.letter').forEach((letter) => {
          letter.classList.remove('animate-reveal');
        });

        // Lottie 숨김
        if (playerRef.current) {
          playerRef.current?.stop();
        }

        target.querySelector('.lottie')?.classList.add('hidden');
      }
    },
    [],
  );

  return { intersectionCallback, playerRef };
};

export default useTitleHook;
