import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  beginStroke,
  updateStroke,
} from './modules/currentStroke/actions';
import { endStroke } from './modules/strokes/actions';
import './App.css';
import { currentStrokeSelector } from './modules/currentStroke/selector';
import { historyIndexSelector } from './modules/historyIndex/selector';
import { strokesSelector } from './modules/strokes/selectors';
import { drawStroke, clearCanvas } from './canvasUtils';
import { ColorPanel } from './ColorPanel';
import { EditPanel } from './EditPanel';
import { Stroke } from './types';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentStroke = useSelector(currentStrokeSelector);
  const historyIndex = useSelector(historyIndexSelector);
  const strokes = useSelector(strokesSelector);
  const isDrawing = !!currentStroke.points.length;
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext('2d') };
  };
  const dispatch = useDispatch();

  // https://github.com/CaioGrossi/Redux-Paint/blob/0e91eb70be23c7ab12a21e9af7aa60c576b8f0b5/src/components/CanvasPanel/index.tsx#L36-L58
  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }
    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color)
    );
  }, [currentStroke, getCanvasWithContext]);

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!context || !canvas) {
      return;
    }
    requestAnimationFrame(() => {
      clearCanvas(canvas);

      strokes
        .slice(0, strokes.length - historyIndex)
        .forEach((stroke) => {
          drawStroke(context, stroke.points, stroke.color);
        });
    });
  }, [getCanvasWithContext, historyIndex, strokes]);

  // useEffect(() => {
  //   const { canvas, context } = getCanvasWithContext();
  //   if (!context || !canvas) {
  //     return;
  //   }
  //   requestAnimationFrame(() => {
  //     clearCanvas(canvas);
  //     strokes
  //       .slice(0, strokes.length - historyIndex)
  //       .forEach((stroke: Stroke) => {
  //         drawStroke(context, stroke.points, stroke.color);
  //       });
  //   });
  // });

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
        <EditPanel />
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
