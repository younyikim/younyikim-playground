import { RouterProvider } from 'react-router-dom';
import '@younyikim/ui/dist/style.css';

// Utils
import router from './utils/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
