import { ForwardedRef, forwardRef } from 'react';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      ref={ref}
      className="bg-coral flex h-screen w-full flex-col overflow-hidden"
    >
      Gallery
    </section>
  );
});

export default index;
