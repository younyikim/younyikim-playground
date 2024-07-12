import { useFetchVerify } from '@apis/endpoints';
import { routes } from '@utils/router';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const isAuthorizedUser = useFetchVerify();

  useEffect(() => {
    if (!isAuthorizedUser || !isAuthorizedUser.data?.success) {
      navigate(routes.admin.signIn);
    }
  }, [isAuthorizedUser?.data]);

  if (isAuthorizedUser && isAuthorizedUser.data?.success) {
    return <>{children}</>;
  }

  return null;
};

export default index;
