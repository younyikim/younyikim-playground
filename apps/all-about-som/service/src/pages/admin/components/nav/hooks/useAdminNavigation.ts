import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Apis
import { usePostSignOut } from '@apis/endpoints';

// Utils
import { routes } from '@utils/router';

const useAdminNavigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { mutate } = usePostSignOut();

  const menu = [
    { id: 'section1', name: 'Status 수정', route: routes.admin.status },
  ];

  const handleMenuClick = (route: string) => {
    setIsMenuOpen(false);
    navigate(route);
  };

  return {
    menu,
    isMenuOpen,
    setIsMenuOpen,
    handleMenuClick,
    mutate,
  };
};

export default useAdminNavigation;
