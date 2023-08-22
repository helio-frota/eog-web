import React, { useRef, useEffect } from 'react';

function World() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) {
      return;
    }
    const ctx = canvas.getContext('2d');
    const positions = [
      { x: 50, y: 50 },
      { x: 400, y: 50 },
      { x: 50, y: 400 },
      { x: 400, y: 400 }
    ];

    if (ctx === null) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = 'rgb(38 139 210)';
      ctx.fillRect(positions[i].x, positions[i].y, 100, 100);
    }

    const ctx2 = canvas.getContext('2d');
    if (ctx2 === null) {
      return;
    }
    ctx2.fillStyle = 'rgb(181 137 0)';
    ctx2.fillRect(90, 90, 20, 20);
    
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;

}

export default World;
