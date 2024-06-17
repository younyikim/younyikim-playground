import { Button } from '@younyikim/ui';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="max-w-3xl overflow-x-hidden">
      <h1>Vite + React</h1>
      <Button className="bg-red-100">TEST</Button>
      <div className="bg-yellow font-gulf text-4xl underline">Hello world!</div>
      <Outlet />
    </div>
  );
}

export default Root;
