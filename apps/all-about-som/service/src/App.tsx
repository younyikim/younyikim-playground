import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@younyikim/ui';
import '@younyikim/ui/dist/style.css';

// Apis
import { queryClient } from '@apis/react-query';

// Utils
import { router } from '@utils/router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
