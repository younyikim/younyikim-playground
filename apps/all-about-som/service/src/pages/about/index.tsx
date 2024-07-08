import { ForwardedRef, forwardRef } from 'react';

// Components
import Title from '@pages/about/components/title';
import Card from '@pages/about/components/card';
import Content from '@pages/about/components/content';

// Utils
import { Images } from '@utils/image';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      ref={ref}
      className="bg-yellow scrollbar-hide relative flex h-fit w-full flex-col items-center overflow-hidden"
    >
      <Title />
      <Card />
      <Content />

      {/* 하단 원형 아이콘 */}
      <div className="dots">
        <img src={Images.circle} alt="Circle image" width={46} height={46} />
        <img src={Images.circle} alt="Circle image" width={46} height={46} />
      </div>
    </section>
  );
});

export default index;
