import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

// pages
import Root from '@pages/Root';
import Admin from '@pages/admin';

const router: ReturnType<typeof createMemoryRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);

export default router;
