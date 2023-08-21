import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Timer;
