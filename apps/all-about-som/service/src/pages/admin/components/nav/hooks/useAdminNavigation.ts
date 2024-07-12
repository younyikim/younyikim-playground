import { routes } from '@utils/router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAdminNavigation = () => {
  const menu = [
    { id: 'section1', name: 'Status 수정', route: routes.admin.status },
  ];

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (route: string) => {
    setIsMenuOpen(false);
    navigate(route);
  };

  return { menu, isMenuOpen, setIsMenuOpen, handleMenuClick };
};

export default useAdminNavigation;
