import { createAction } from '@reduxjs/toolkit';
import { Point, Stroke } from '../../types';

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const END_STROKE = 'END_STROKE';
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';

export type Action =
  | { type: typeof BEGIN_STROKE; payload: Point }
  | { type: typeof UPDATE_STROKE; payload: Point }
  | {
      type: typeof END_STROKE;
      payload: { stroke: Stroke; historyLimit: number };
    }
  | { type: typeof SET_STROKE_COLOR; payload: string };

export const beginStroke = createAction<Point>('BEGIN_STROKE');
// (x: number, y: number): Action => {
//   return { type: BEGIN_STROKE, payload: { x, y } };
// };

export const updateStroke = createAction<Point>('UPDATE_STROKE');
// (x: number, y: number): Action => {
//   return { type: UPDATE_STROKE, payload: { x, y } };
// };

export const setStrokeColor = createAction<string>(
  'SET_STROKE_COLOR'
);
// (color: string): Action => {
//   return { type: SET_STROKE_COLOR, payload: color };
// };

export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>('endStroke');
