import { ForwardedRef, forwardRef } from 'react';

// Hooks
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useStatus from '@pages/status/hooks/useStatus';

// Components
import StatusCard from '@pages/status/components/statusCard';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { isTransitionOver, currentStatus, intersectionCallback } = useStatus();

  useIntersectionObserver(intersectionCallback, 'observe-status', {
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="observe-status relative flex h-screen w-full flex-col items-center overflow-hidden bg-black"
    >
      <div className="status-overlay bg-yellow z-2 absolute top-0 h-screen w-full origin-right" />
      <div
        className={`flex h-full w-full flex-col items-center justify-start p-20 ${isTransitionOver ? 'animate-fade-up opacity delay-1000' : 'opacity-0'} box-border gap-20`}
      >
        <h3 className="font-gulf text-6xl text-white">WHERE IS SOM?</h3>
        <StatusCard currentStatus={currentStatus} />
      </div>
    </section>
  );
});

export default index;
