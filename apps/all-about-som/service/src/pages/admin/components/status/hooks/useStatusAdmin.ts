import { useEffect, useState } from 'react';

// Apis
import { useFetchStatus, usePatchStatus } from '@apis/endpoints/status';

interface RadioOption {
  value: string;
  id: string;
  label: string;
}

enum StatusValue {
  HOME = '집',
  WALK = '산책',
  PARK = '운동장',
}

const useStatus = () => {
  const options: RadioOption[] = [
    { value: StatusValue.HOME, id: 'status-home', label: '집' },
    { value: StatusValue.WALK, id: 'status-walk', label: '산책 중' },
    { value: StatusValue.PARK, id: 'status-park', label: '강아지 운동장' },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const { mutate } = usePatchStatus();
  const { data } = useFetchStatus();

  const handleSaveClick = () => {
    mutate({ statusValue: selectedValue });
  };

  useEffect(() => {
    if (data) {
      setSelectedValue(data);
    }
  }, [data]);

  return { options, selectedValue, setSelectedValue, handleSaveClick };
};

export default useStatus;
