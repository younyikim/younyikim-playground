import { useCallback } from 'react';

const useStatus = () => {
  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      if (isIntersecting) {
        target.classList.add('animate-overlay-fade-in');
      } else {
        target.classList.remove('animate-overlay-fade-in');
      }
    },
    [],
  );

  return { intersectionCallback };
};

export default useStatus;
