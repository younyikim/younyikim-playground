import { ForwardedRef, forwardRef } from 'react';

// Components
import Title from '@pages/about/components/title';
import Card from '@pages/about/components/card';

// Utils
import { Images } from '@utils/image';

const index = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section
      ref={ref}
      className="bg-yellow relative flex h-screen w-full flex-col items-center"
    >
      <Title />
      <Card />
      {/* 하단 원형 아이콘 */}
      <div className="dots">
        <img src={Images.circle} alt="Circle image" />
        <img src={Images.circle} alt="Circle image" />
      </div>
    </section>
  );
});

export default index;
