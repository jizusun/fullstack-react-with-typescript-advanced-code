export type RootState = {
  currentStoke: Stroke;
  strokes: Stroke[];
  historyIndex: number;
};

export type Stroke = {
  points: Point[];
  color: string;
};

export type Point = {
  x: number;
  y: number;
};
