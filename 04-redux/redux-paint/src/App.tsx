import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { beginStroke, updateStroke, endStroke } from './action';
import './App.css';
import { currentStrokeSelector } from './selectors';
import { drawStroke } from './canvasUtils';
import { ColorPanel } from './ColorPanel';

const App: React.FC = () => {
  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }
    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color);
    });
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentStroke = useSelector(currentStrokeSelector);
  const isDrawing = !!currentStroke.points.length;
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext('2d') };
  };
  const dispatch = useDispatch();

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  };
  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke());
    }
  };
  const draw = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke(offsetX, offsetY));
  };

  return (
    <div style={{ width: '100%', height: '90%' }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Redux Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <ColorPanel />
        <canvas
          style={{
            backgroundColor: 'white',
          }}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseOut={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width="800px"
          height="500px"
        />
      </div>
    </div>
  );
};

export default App;
