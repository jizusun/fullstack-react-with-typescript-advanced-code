export type RootState = {
  currentStoke: Stroke;
  strokes: Stroke[];
};

export type Stroke = {
  points: Point[];
  color: string;
};

export type Point = {
  x: number;
  y: number;
};
