import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

// pages
import Root from '@pages/Root';

const router: ReturnType<typeof createMemoryRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/children',
        element: <div>Root의 Children입니다.</div>,
      },
    ],
  },
  {
    path: '/test',
    element: <div>Test</div>,
  },
]);

export default router;
