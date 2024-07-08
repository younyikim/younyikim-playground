// Typings
import { StatusCardProps } from '@pages/status/typings';
import { Images } from '@utils/image';

const index = (props: StatusCardProps) => {
  const { currentStatus } = props;

  return (
    <>
      {currentStatus === 'park' ? (
        <div className="bg-green flex h-full w-full flex-col items-center justify-center rounded-[2rem]">
          <h3 className="font-gulf text-yellow text-6xl">DOG</h3>
          <h3 className="font-gulf text-yellow text-6xl">PARK</h3>
          <img
            src={Images.park}
            alt="Dog Park image"
            loading="lazy"
            width="640"
            height="360"
            className="h-auto w-full"
          />
        </div>
      ) : currentStatus === 'home' ? (
        <div className="bg-yellow flex h-full w-full flex-col items-center justify-around rounded-[2rem]">
          <h3 className="font-gulf text-coral text-6xl">HOME</h3>
          <img
            src={Images.home}
            alt="Dog Park image"
            loading="lazy"
            width="640"
            height="360"
            className="h-auto w-full"
          />
        </div>
      ) : currentStatus === 'walk' ? (
        <div className="bg-coral relative flex h-full w-full flex-col items-center justify-center rounded-[2rem]">
          <div className="absolute top-44">
            <h3 className="font-gulf text-yellow text-6xl">ON A</h3>
            <h3 className="font-gulf text-yellow text-6xl">WALK</h3>
          </div>
          <img
            src={Images.walk}
            alt="Dog Park image"
            loading="lazy"
            width="640"
            height="360"
            className="h-auto w-full"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default index;
