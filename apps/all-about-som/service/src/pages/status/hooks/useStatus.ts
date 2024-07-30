import { useCallback, useEffect, useState } from 'react';

// Typings
import { StatusType } from '@pages/status/typings';
import { useFetchStatus } from '@apis/endpoints/status';

const useStatus = () => {
  const [isTransitionOver, setIsTransitionOver] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<StatusType>('집');

  const { data } = useFetchStatus();

  useEffect(() => {
    if (data) {
      setCurrentStatus(data);
    }
  }, [data]);

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
