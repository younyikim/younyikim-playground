import { useEffect } from 'react';

/**
 * @description Intersection Observer를 사용하여 대상 요소의 가시성을 모니터링하고, 대상이 화면에 나타날 때 콜백 함수를 실행
 *
 * @param {Function} callback - 대상 요소가 화면에 나타날 때 실행될 콜백 함수
 */

type IntersectionCallback = (target: Element, isIntersecting?: boolean) => void;

const useIntersectionObserver = (callback: IntersectionCallback) => {
  useEffect(() => {
    // Intersection Observer가 관찰할 타겟 엘리먼트의 클래스 이름
    const targetClassName = 'observe-target';
    const targets = document.getElementsByClassName(targetClassName);

    if (targets.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          // 관찰되는 모든 타켓 요소에 대해 콜백 함수 실행
          entries.forEach((entry) => {
            callback(entry.target, entry.isIntersecting);
          });
        },
        // 타겟 요소가 90% 이상 보이면 콜백 실행
        { threshold: 0.9 },
      );

      Array.from(targets).forEach((target) => {
        observer.observe(target);
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [callback]);
};

export default useIntersectionObserver;
