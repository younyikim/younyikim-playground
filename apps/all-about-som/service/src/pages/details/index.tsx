import { ForwardedRef, forwardRef } from 'react';

// Components
import Title from '@pages/details/components/title';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      ref={ref}
      className="bg-blue scrollbar-hide relative flex h-fit w-full flex-col items-center overflow-hidden"
    >
      <Title />
    </section>
  );
});

export default index;
