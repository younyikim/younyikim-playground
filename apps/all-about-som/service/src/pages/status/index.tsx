import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useStatus from '@pages/status/hooks/useStatus';
import { ForwardedRef, forwardRef } from 'react';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { intersectionCallback } = useStatus();

  useIntersectionObserver(intersectionCallback, 'observe-status');

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full flex-col items-center bg-black"
    >
      <div className="observe-status location-overlay bg-yellow z-2 absolute top-0 h-screen w-full origin-[100%_50%]"></div>
    </section>
  );
});

export default index;
