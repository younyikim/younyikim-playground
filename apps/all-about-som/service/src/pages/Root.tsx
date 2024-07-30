import { Suspense, lazy, useRef } from 'react';

// Pages
const Landing = lazy(() => import('@pages/landing'));
const About = lazy(() => import('@pages/about'));
const Details = lazy(() => import('@pages/details'));
const Gallery = lazy(() => import('@pages/gallery'));
const Location = lazy(() => import('@pages/status'));

// Components
import Nav from '@components/nav';
import Loading from '@components/loading';

function Root() {
  const locationRef = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Nav locationRef={locationRef} />
        <Landing ref={locationRef.section1} />
        <About ref={locationRef.section2} />
        <Details ref={locationRef.section3} />
        <Gallery ref={locationRef.section4} />
        <Location ref={locationRef.section5} />
      </Suspense>
    </>
  );
}

export default Root;
