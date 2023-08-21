import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Timer from './Timer';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <>
      <Timer />
    </>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);