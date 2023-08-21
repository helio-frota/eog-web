import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      Time remaining: {timer}
    </div>
  );
}

export default Timer;
