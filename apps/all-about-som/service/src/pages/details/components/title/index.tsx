// Utils
import { Images } from '@utils/image';

const index = () => {
  return (
    <div className="flex w-full items-center justify-around gap-6 overflow-hidden py-40">
      <div className="animate-text-scroll flex flex-shrink-0 items-center justify-around gap-6">
        <div className="flex w-fit flex-shrink-0 items-center justify-center gap-6">
          <p className="detail-title">DETAILS</p>
          <img src={Images.flowerWhite} width={40} height={40} alt="Flowers" />
        </div>
        <div className="flex w-fit flex-shrink-0 items-center justify-center gap-6">
          <p className="detail-title">DETAILS</p>
          <img src={Images.flowerWhite} width={40} height={40} alt="Flowers" />
        </div>
      </div>
      <div className="animate-text-scroll flex flex-shrink-0 items-center justify-around gap-6">
        <div className="flex w-fit flex-shrink-0 items-center justify-center gap-6">
          <p className="detail-title">DETAILS</p>
          <img src={Images.flowerWhite} width={40} height={40} alt="Flowers" />
        </div>
        <div className="flex w-fit flex-shrink-0 items-center justify-center gap-6">
          <p className="detail-title">DETAILS</p>
          <img src={Images.flowerWhite} width={40} height={40} alt="Flowers" />
        </div>
      </div>
    </div>
  );
};

export default index;
