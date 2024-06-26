export interface InfoCardProps {
  selected: number;
  handleSelected: (index: number) => void;
  cardIndex: number;
  className?: string;
  faceContent: ReactNode;
  backContent?: ReactNode;
}
