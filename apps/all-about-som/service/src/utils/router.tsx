import {
  Navigate,
  createBrowserRouter,
  createMemoryRouter,
} from 'react-router-dom';

// pages
import Root from '@pages/Root';
import Admin from '@pages/admin';
import SignIn from '@pages/admin/components/signIn';
import Status from '@pages/admin/components/status';

// Components
import ProtectedRoute from '@components/protectedRoute';

export const router: ReturnType<typeof createMemoryRouter> =
  createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/admin',
      element: <Admin />,
      children: [
        {
          path: '',
          element: <Navigate to="sign-in" />, // '/admin'으로 접근 시 자동으로 '/admin/sign-in'으로 redirect.
        },
        {
          path: 'sign-in',
          element: <SignIn />,
        },
        {
          path: 'status',
          element: (
            <ProtectedRoute>
              <Status />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

export const routes = {
  admin: {
    signIn: '/admin/sign-in',
    status: '/admin/status',
  },
};
