import { Switch } from '@younyikim/ui';

// Typings
import { InfoCardSwitchProps } from '@pages/details/components/infoCardSwitch/types';

const index = (props: InfoCardSwitchProps) => {
  const {
    selected,
    cardIndex,
    cardClassName,
    switchClassName,
    thumbClassName,
    handleSelected,
    faceContent,
    backContent,
    checkedIcon = '',
    uncheckedIcon = '',
  } = props;

  return (
    <div
      className={`box-border flex flex-1 cursor-pointer items-center justify-center border border-black ${cardClassName} flex-col`}
    >
      {selected === cardIndex ? backContent : faceContent}
      <div className="flex h-1/4 w-full items-start justify-center">
        <div className="w-1/2">
          {checkedIcon === '' || uncheckedIcon === '' ? (
            <Switch
              className={`h-44 w-full border border-black p-4 data-[state=checked]:bg-white data-[state=unchecked]:bg-white ${switchClassName}`}
              thumbStyle={`h-full w-36 border border-black bg-purple data-[state=checked]:translate-x-[4.2rem] ${thumbClassName}`}
            />
          ) : (
            <Switch
              src={selected === cardIndex ? uncheckedIcon : checkedIcon}
              checked={selected === cardIndex}
              onCheckedChange={(checked) =>
                checked ? handleSelected(cardIndex) : handleSelected(-1)
              }
              className={`h-full w-full border border-black p-4 ${switchClassName}`}
              thumbStyle={`h-full w-36 border border-black  p-4 data-[state=checked]:translate-x-[4.2rem] ${thumbClassName}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
