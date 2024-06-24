export interface InfoCardProps {
  selected: number;
  handleSelected: (index: number) => void;
  cardIndex: number;
  className?: string;
  isUseToggle?: boolean;
  faceContent: ReactNode;
  backContent: ReactNode;
}
