import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Score from './Score';
import Steps from './Steps';
import Timer from './Timer';
import World from './World';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <h2 style={{color: 'rgb(38 139 210)'}}><Score /></h2>
        <h2 style={{color: 'rgb(38 139 210)'}}><Steps /></h2>
        <h2 style={{color: 'rgb(38 139 210)'}}><Timer /></h2>
      </div>
      <hr style={{color: 'rgb(38 139 210)', borderColor : 'rgb(38 139 210)'}}/>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <World />
      </div>
    </>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);