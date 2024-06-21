import { ForwardedRef, forwardRef } from 'react';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      ref={ref}
      className="bg-blue scrollbar-hide relative flex h-fit w-full flex-col items-center overflow-hidden"
    >
      index
    </section>
  );
});

export default index;
