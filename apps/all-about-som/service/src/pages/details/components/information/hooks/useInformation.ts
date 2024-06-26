import { useState } from 'react';

const useInformation = () => {
  const [selected, setSelected] = useState(-1);

  const handleSelected = (index: number) => {
    setSelected(index);
  };

  return { selected, handleSelected };
};

export default useInformation;
