import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline bg-red-300">Hello world!</h1>
      <Outlet />
    </>
  );
}

export default Root;
