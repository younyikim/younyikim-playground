import { ReactNode } from 'react';

export interface InfoCardSwitchProps {
  selected: number;
  handleSelected: (index: number) => void;
  cardIndex: number;
  cardClassName?: string;
  switchClassName?: string;
  thumbClassName?: string;
  faceContent: ReactNode;
  backContent: ReactNode;
  checkedIcon?: string;
  uncheckedIcon?: string;
}
