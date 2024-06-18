import { useCallback } from 'react';

const useAbout = () => {
  const intersectionCallback = useCallback(
    (target: Element, isIntersecting?: boolean) => {
      if (isIntersecting) {
        target.querySelectorAll('.letter').forEach((letter, index) => {
          setTimeout(() => {
            letter.classList.add('reveal');
            letter.classList.remove('hide');
          }, index * 100); // Adjust delay between letters as needed
        });
      } else {
        target.querySelectorAll('.letter').forEach((letter) => {
          letter.classList.remove('reveal');
        });
      }
    },
    [],
  );

  return { intersectionCallback };
};

export default useAbout;
