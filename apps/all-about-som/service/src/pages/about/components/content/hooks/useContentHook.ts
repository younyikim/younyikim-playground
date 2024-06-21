import { useCallback } from 'react';

const useContentHook = () => {
  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      if (isIntersecting) {
        target.classList.add('animate-fade-up');
      } else {
        target.classList.remove('animate-fade-up');
      }
    },
    [],
  );

  return { intersectionCallback };
};

export default useContentHook;
