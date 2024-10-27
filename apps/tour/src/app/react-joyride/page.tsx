'use client';

import Tour from '@/components/Tour';

export default function Page() {
  return (
    <section className="p-8" id="my-selector">
      <Tour />
      <h1 className="mb-4 text-center text-3xl font-bold">
        Welcome to the Tour Demo - Reacy JoyRide
      </h1>

      <div className="mb-4 flex h-[500px] flex-col items-center justify-center rounded-lg border border-gray-300 p-4">
        <div className="tour-upload relative">
          <p className="mb-2 text-gray-700">Drag Files</p>
          <p className="mb-4 text-gray-500">or</p>
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Click here
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="tour-folder flex h-36 w-36 items-center justify-center rounded-lg bg-blue-500 text-white shadow-md">
          <p>Box 1</p>
        </div>
        <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-green-500 text-white shadow-md">
          <p>Box 2</p>
        </div>
      </div>
    </section>
  );
}
