import React, { useState } from 'react';

function Score() {
  const [score, setScore] = useState(1000);

  return (
    <div>
      Score: {score}
    </div>
  );
}

export default Score;
