import { ForwardedRef, forwardRef } from 'react';

// Components
import Title from '@pages/details/components/title';
import Information from '@pages/details/components/information';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      ref={ref}
      className="bg-blue scrollbar-hide relative flex h-fit w-full flex-col items-center overflow-hidden"
    >
      <Title />
      <Information />
    </section>
  );
});

export default index;
