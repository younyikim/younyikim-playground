// Utils
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useContentHook from '@pages/about/components/content/hooks/useContentHook';
import { Images } from '@utils/image';

const index = () => {
  const { intersectionCallback } = useContentHook();

  useIntersectionObserver(intersectionCallback, 'observe-content');

  return (
    <div className="observe-content flex w-full flex-col items-center justify-center px-20 py-16 opacity-0">
      {/* 스티커 */}
      <div className="flex w-full items-start justify-between">
        <img src={Images.flower} alt="Flower icon" width={52} height={52} />
        <img src={Images.starGreen} alt="Star icon" width={50} height={71} />
      </div>
      {/* About 콘텐츠 */}
      <div className="justify-centerpx-16 flex w-full flex-col items-center px-20">
        <p className="font-pretendard text-lg">
          솜이는 2022년, 따뜻한 봄날에 태어나 그해 저희 가족의 일원이 되었어요.
          솜이는 태어나자 마자 몸이 좋지 않아 심장 수술을 받았고, 1살 때는
          슬개골 수술을 했어요. 이제는 모두 회복하고, 사랑을 듬뿍 받으며
          건강하게 자라고 있어요.
        </p>
        <p className="font-pretendard whitespace-pre-wrap text-lg">
          솜이가 평생 건강하고 행복하길 바라는 마음을 담아 이 사이트를
          만들었어요. 지금부터 우리집 아기 강아지를 더 자세히 소개해볼게요!
        </p>
      </div>
    </div>
  );
};

export default index;
