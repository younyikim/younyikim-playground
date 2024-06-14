import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

// pages
import Root from '@pages/Root';

const router: ReturnType<typeof createMemoryRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/test',
        element: <div>Test</div>,
      },
    ],
  },
]);

export default router;
