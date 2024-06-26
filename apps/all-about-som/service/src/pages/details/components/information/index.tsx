// Component
import useInformation from '@pages/details/components/information/hooks/useInformation';
import InfoCard from '@pages/details/components/infoCard';
import InfoCardSwitch from '@pages/details/components/infoCardSwitch';

// Utils
import { Images } from '@utils/image';
import { calculateDaysSince } from '@utils/date';

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
        <InfoCardSwitch
          selected={selected}
          handleSelected={handleSelected}
          cardIndex={2}
          cardClassName={`${selected === 2 ? 'bg-white' : 'bg-purple'}`}
          switchClassName={
            'data-[state=checked]:bg-purple data-[state=unchecked]:bg-white'
          }
          thumbClassName={
            'data-[state=checked]:bg-white data-[state=unchecked]:bg-purple'
          }
          checkedIcon={Images.starSquare}
          uncheckedIcon={Images.starSquarePurple}
          faceContent={
            <div className="flex h-3/4 flex-col items-center justify-end gap-16">
              <p className="font-gulf text-6xl tracking-wide text-white">D+</p>
              <p className="font-gulf text-center text-7xl tracking-wide text-white">
                {calculateDaysSince()}
              </p>
            </div>
          }
          backContent={
            <div className="flex h-3/4 flex-col items-center justify-end">
              <p className="font-gulf text-purple text-center text-4xl tracking-wide">
                2022
              </p>
              <p className="font-gulf text-purple text-center text-7xl leading-none tracking-wide">
                MAY
              </p>
              <p className="font-gulf text-purple text-center text-7xl leading-none tracking-wide">
                02
              </p>
            </div>
          }
        />
      </div>
      <div className="box-border flex flex-1">
        <InfoCardSwitch
          selected={selected}
          handleSelected={handleSelected}
          cardIndex={3}
          cardClassName={`${selected === 3 ? 'bg-white' : 'bg-coral'}`}
          switchClassName={
            'data-[state=checked]:bg-coral data-[state=unchecked]:bg-white'
          }
          thumbClassName={
            'data-[state=checked]:bg-white data-[state=unchecked]:bg-coral'
          }
          checkedIcon={Images.starSquare}
          uncheckedIcon={Images.starSquareCoral}
          faceContent={
            <div className="relative box-border flex h-3/4 flex-col items-center justify-center">
              <div className="absolute z-0">
                <img src={Images.starAlert} alt="Alert Star" />
              </div>
              <p className="font-gulf z-10 text-center text-5xl tracking-wide text-white">
                ALERT
              </p>
            </div>
          }
          backContent={
            <div className="box-border flex h-3/4 w-full flex-col items-center justify-center overflow-hidden px-8">
              <p className="font-gulf text-coral z-10 text-center text-4xl">
                CHICKEN
              </p>
              <p className="font-gulf text-coral z-10 text-center text-4xl">
                ALLERGY
              </p>
            </div>
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
