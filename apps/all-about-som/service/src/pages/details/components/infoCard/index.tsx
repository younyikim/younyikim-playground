import { InfoCardProps } from '@pages/details/components/infoCard/types';

const index = (props: InfoCardProps) => {
  const {
    selected,
    cardIndex,
    className,

    handleSelected,
    faceContent,
    backContent,
  } = props;

  return (
    <div
      className={`box-border flex flex-1 cursor-pointer items-center justify-center border border-black ${className} relative`}
      onClick={() => {
        selected === cardIndex ? handleSelected(-1) : handleSelected(cardIndex);
      }}
    >
      <div
        className={`${selected === cardIndex ? 'hidden' : 'visible'} h-full w-full`}
      >
        {faceContent}
      </div>
      <div
        className={`${selected === cardIndex ? 'visible' : 'hidden'} h-full w-full`}
      >
        {backContent}
      </div>
    </div>
  );
};

export default index;
