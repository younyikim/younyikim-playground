import { Switch } from '@younyikim/ui';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

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
      className={`box-border flex flex-1 cursor-pointer items-center justify-center border border-black ${cardClassName} relative flex-col overflow-hidden`}
    >
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={
            selected === cardIndex ? `back-${cardIndex}` : `face-${cardIndex}`
          }
          timeout={{ enter: 500, exit: 0 }}
          classNames={
            selected === cardIndex
              ? {
                  enter: 'opacity-0',
                  enterActive:
                    'opacity-100 transition-opacity duration-500 animate-slide-in-left',
                  exit: 'opacity-100',
                  exitActive:
                    'opacity-0 transition-opacity duration-500 ease-in animate-slide-in-right',
                }
              : {
                  enter: 'opacity-0',
                  enterActive:
                    'opacity-100 transition-opacity duration-500 animate-slide-in-right',
                  exit: 'opacity-100',
                  exitActive:
                    'opacity-0 transition-opacity duration-500 ease-in animate-slide-in-left',
                }
          }
        >
          {selected === cardIndex ? backContent : faceContent}
        </CSSTransition>
      </SwitchTransition>

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
              thumbStyle={`h-full w-36 border border-black  p-4 data-[state=checked]:translate-x-[4.8rem] ${thumbClassName}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
