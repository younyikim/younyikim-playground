import { useState } from 'react';

// Typings
import { NavProps } from '@components/nav/typings/nav';

const menu = [
  { id: 'section1', name: 'HOME' },
  { id: 'section2', name: 'ABOUT' },
  { id: 'section3', name: 'DETAILS' },
  { id: 'section4', name: 'FAVORITES' },
  { id: 'section5', name: 'GALLERY' },
  { id: 'section6', name: 'WHERE IS SOM?' },
];

const useNavigation = (props: NavProps) => {
  const { locationRef } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * 선택된 메뉴에 해당하는 컴포넌트 위치로 이동하는 함수
   *
   * @param {string} id - 스크롤할 섹션의 ID
   */
  const handleMenuClick = (id: string) => {
    const selectedRef = locationRef[id]?.current;

    if (selectedRef) {
      setIsMenuOpen(false);
      selectedRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { menu, isMenuOpen, setIsMenuOpen, handleMenuClick };
};

export default useNavigation;
