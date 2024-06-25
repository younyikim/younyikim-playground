import { Button } from '@younyikim/ui';

function App() {
  return (
    <div>
      <div
        className={`flex h-[100vh] w-[100vw] flex-col items-center justify-center`}
      >
        <div className="py-4">
          <Button>Toggle Dark Mode</Button>
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
