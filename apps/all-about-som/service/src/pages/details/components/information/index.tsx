// Component
import useInformation from '@pages/details/components/information/hooks/useInformation';

// Hooks
import InfoCard from '@pages/details/components/infoCard';
import { Images } from '@utils/image';

const index = () => {
  const { selected, handleSelected } = useInformation();

  return (
    <div className="box-border flex h-screen w-full flex-col bg-slate-50">
      <div className="box-border flex flex-1">
        <InfoCard
          selected={selected}
          handleSelected={handleSelected}
          cardIndex={1}
          className="bg-green"
          faceContent={
            <div className="flex h-full items-center justify-center">
              <p className="font-gulf text-center text-6xl tracking-wide text-white">
                CAN I PET SOM?
              </p>
            </div>
          }
          backContent={
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="z-1 absolute h-full w-full">
                <img
                  src={Images.spark}
                  alt="Spark icon"
                  className="min-h-full min-w-full"
                />
              </div>
              <p className="animate-fade-up font-gulf stroke z-10 text-center text-7xl tracking-wide text-white">
                YES!
              </p>
            </div>
          }
        />
        <InfoCard
          selected={selected}
          handleSelected={handleSelected}
          cardIndex={2}
          className="bg-purple"
          faceContent={
            <p className="font-gulf text-center text-6xl tracking-wide text-white">
              f2
            </p>
          }
          backContent={
            <p className="font-gulf text-center text-6xl tracking-wide text-white">
              f2-back
            </p>
          }
        />
      </div>
      <div className="flex flex-1">
        <InfoCard
          selected={selected}
          handleSelected={handleSelected}
          cardIndex={3}
          className="bg-coral"
          faceContent={
            <p className="font-gulf text-center text-6xl tracking-wide text-white">
              f3
            </p>
          }
          backContent={
            <p className="font-gulf text-center text-6xl tracking-wide text-white">
              f3-back
            </p>
          }
        />
        <InfoCard
          selected={selected}
          handleSelected={handleSelected}
          cardIndex={4}
          className="bg-pink"
          faceContent={
            <p className="font-gulf text-center text-6xl tracking-wide text-white">
              f4
            </p>
          }
          backContent={
            <p className="font-gulf text-center text-6xl tracking-wide text-white">
              f4-back
            </p>
          }
        />
      </div>
    </div>
  );
};

export default index;
