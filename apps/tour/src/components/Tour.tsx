'use client';
import dynamic from 'next/dynamic';
import { Step } from 'react-joyride';

import TourTooltip from '@/components/TourTooltip';

const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

export default function Tour() {
  const steps: Step[] = [
    {
      content: 'First, Upload the video here!\nClick or drag&drop the file.',
      target: '.tour-upload',
      disableBeacon: true,
      disableScrolling: true,
      disableScrollParentFix: true,
      placement: 'right',
      offset: 30,
      floaterProps: {
        hideArrow: true,
      },
    },
    {
      content: 'Folder',
      target: '.tour-folder',
    },
  ];

  return (
    <>
      <Joyride
        steps={steps}
        tooltipComponent={TourTooltip}
        continuous={true}
        styles={{
          options: {
            zIndex: 10000,
          },
        }}
      />
    </>
  );
}
