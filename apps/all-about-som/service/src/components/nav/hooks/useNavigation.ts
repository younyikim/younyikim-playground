import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Typings
import { NavProps } from '@components/nav/typings/nav';
import { routes } from '@utils/router';

const menu = [
  { id: 'section1', name: 'HOME' },
  { id: 'section2', name: 'ABOUT' },
  { id: 'section3', name: 'DETAILS' },
  { id: 'section4', name: 'GALLERY' },
  { id: 'section5', name: 'WHERE IS SOM?' },
];

const useNavigation = (props: NavProps) => {
  const { locationRef } = props;

  const navigate = useNavigate();

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

  /**
   * 버튼 클릭시, 관리자 페이지로 라우팅
   */
  const handleAdminClick = () => {
    navigate(routes.admin.signIn);
  };

  return { menu, isMenuOpen, setIsMenuOpen, handleMenuClick, handleAdminClick };
};

export default useNavigation;
