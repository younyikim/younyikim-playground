import { useCallback, useState } from 'react';

// Typings
import { Status } from '@pages/status/typings';

const useStatus = () => {
  const [isTransitionOver, setIsTransitionOver] = useState(false);
  const [currentStatus] = useState<Status>('home');

  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      const overlayElement = target.querySelector('.status-overlay');

      if (overlayElement) {
        if (isIntersecting) {
          overlayElement.classList.add('animate-overlay-fade-in');
          setIsTransitionOver(true);
        } else {
          overlayElement.classList.remove('animate-overlay-fade-in');
          setIsTransitionOver(false);
        }
      }
    },
    [],
  );

  return { isTransitionOver, currentStatus, intersectionCallback };
};

export default useStatus;
