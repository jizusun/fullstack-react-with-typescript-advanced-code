import {
  createContext,
  PropsWithChildren,
  useRef,
  RefObject,
  useContext,
} from 'react';

export const CanvasContext = createContext<
  RefObject<HTMLCanvasElement>
>({} as RefObject<HTMLCanvasElement>);

export const CanvasProvider: React.FC = ({
  children,
}: PropsWithChildren<{}>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <CanvasContext.Provider value={canvasRef}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);
