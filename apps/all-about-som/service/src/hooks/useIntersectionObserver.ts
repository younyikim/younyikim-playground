import { useEffect } from 'react';

/**
 * @description Intersection Observer를 사용하여 대상 요소의 가시성을 모니터링하고, 대상이 화면에 나타날 때 콜백 함수를 실행
 *
 * @param {Function} callback - 대상 요소가 화면에 나타날 때 실행될 콜백 함수
 */

type IntersectionCallback = (target: Element, isIntersecting?: boolean) => void;
type IntersectionOptionsType = IntersectionObserverInit;

const useIntersectionObserver = (
  callback: IntersectionCallback,
  selector: string,
  options?: IntersectionOptionsType,
) => {
  useEffect(() => {
    const elements = document.getElementsByClassName(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        // 관찰되는 모든 타켓 요소에 대해 콜백 함수 실행
        entries.forEach((entry) => {
          callback(entry.target, entry.isIntersecting);
        });
      },

      options,
    );

    Array.from(elements).forEach((element) => observer.observe(element));

    return () => {
      Array.from(elements).forEach((element) => observer.unobserve(element));
    };
  }, [selector, callback]);
};

export default useIntersectionObserver;
