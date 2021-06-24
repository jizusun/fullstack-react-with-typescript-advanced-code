import React, { useRef } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startDrawing = () => {};

  const endDrawing = () => {};

  return <canvas ref={canvasRef} />;
}

export default App;
