import { useState } from 'react';

interface RadioOption {
  value: string;
  id: string;
  label: string;
}

const useStatus = () => {
  const options: RadioOption[] = [
    { value: '집', id: 'status-home', label: '집' },
    { value: '산책 중', id: 'status-walk', label: '산책 중' },
    { value: '강아지 운동장', id: 'status-park', label: '강아지 운동장' },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleSaveClick = () => {
    console.log(selectedValue);
  };

  return { options, setSelectedValue, handleSaveClick };
};

export default useStatus;
