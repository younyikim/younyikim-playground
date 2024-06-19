import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

// Pages
import Landing from '@pages/landing';

// Components
import Nav from '@components/nav';
import About from '@pages/about';

function Root() {
  const locationRef = {
    section1: useRef(null),
    section2: useRef(null),
  };

  return (
    <>
      <Nav locationRef={locationRef} />
      <Landing ref={locationRef.section1} />
      <About ref={locationRef.section2} />
      <Outlet />
    </>
  );
}

export default Root;
