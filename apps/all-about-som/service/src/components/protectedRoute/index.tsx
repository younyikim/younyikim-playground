import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Utils
import { IS_AUTH_KEY } from '@utils/constant';
import { routes } from '@utils/router';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * 사용자가 인증된 상태인지 확인하고, 인증되지 않은 경우 로그인 페이지로 리디렉션하는 컴포넌트
 *
 * @param {ProtectedRouteProps} props
 * @returns {ReactNode | null} 인증된 경우 자식 요소, 인증되지 않은 경우 null을 반환
 */

const index = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem(IS_AUTH_KEY);

  useEffect(() => {
    if (!isAuth) {
      navigate(routes.admin.signIn);
    }
  }, [isAuth]);

  if (isAuth) {
    return <>{children}</>;
  }

  return null;
};

export default index;
