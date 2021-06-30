import { Stroke } from '../../types';
import { createAction } from '@reduxjs/toolkit';

export const END_STROKE = 'END_STROKE';
export type Action = {
  type: typeof END_STROKE;
  payload: { stroke: Stroke; historyLimit: number };
};
export type HistoryIndexAction = {
  type: typeof END_STROKE;
  payload: { stroke: Stroke; historyLimit: number };
};

// export const endStroke = (
//   historyLimit: number,
//   stroke: Stroke
// ): Action => {
//   return { type: END_STROKE, payload: { historyLimit, stroke } };
// };

export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>('endStroke');
