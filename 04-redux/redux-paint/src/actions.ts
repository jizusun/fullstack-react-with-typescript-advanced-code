import { Point } from './types';

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const END_STROKE = 'END_STROKE';
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export type Action =
  | { type: typeof BEGIN_STROKE; payload: Point }
  | { type: typeof UPDATE_STROKE; payload: Point }
  | { type: typeof END_STROKE }
  | { type: typeof UNDO }
  | { type: typeof REDO }
  | { type: typeof SET_STROKE_COLOR; payload: string };

export const beginStroke = (x: number, y: number): Action => {
  return { type: BEGIN_STROKE, payload: { x, y } };
};

export const updateStroke = (x: number, y: number): Action => {
  return { type: UPDATE_STROKE, payload: { x, y } };
};

export const endStroke = (): Action => {
  return { type: END_STROKE };
};

export const setStrokeColor = (color: string): Action => {
  return { type: SET_STROKE_COLOR, payload: color };
};

export const undo = (): Action => {
  return { type: UNDO };
};

export const redo = (): Action => {
  return { type: REDO };
};
