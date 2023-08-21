import React, { useState } from 'react';

function Steps() {
  const [steps, setSteps] = useState(10);

  return (
    <div>
      Steps: {steps}
    </div>
  );
}

export default Steps;
