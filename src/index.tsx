import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Score from './Score';
import Steps from './Steps';
import Timer from './Timer';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <>
      <div>
        <h1 style={{color: 'rgb(38 139 210)' }}><Score /></h1>
        <h1 style={{color: 'rgb(38 139 210)' }}><Steps /></h1>
        <h1 style={{color: 'rgb(38 139 210)' }}><Timer /></h1>
      </div>
    </>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);