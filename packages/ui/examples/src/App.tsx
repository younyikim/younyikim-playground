import { Button } from '@younyikim/ui';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center flex-col h-[100vh] w-[100vw]`}
      >
        <div className="py-4">
          <Button onClick={toggleDarkMode}>Toggle Dark Mode : {mode}</Button>
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
