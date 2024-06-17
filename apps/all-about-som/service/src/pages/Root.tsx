import { Outlet } from 'react-router-dom';

// Pages
import Landing from '@pages/landing';

function Root() {
  return (
    <>
      <Landing />
      <Outlet />
    </>
  );
}

export default Root;
