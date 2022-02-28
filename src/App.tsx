import React, { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setTimeout(function func() {
      setValue((prev) => prev + 1);
      setTimeout(func, 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{value}</p>
    </div>
  );
};

export default App;
