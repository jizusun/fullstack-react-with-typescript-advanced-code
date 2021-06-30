import { createAction } from '@reduxjs/toolkit';
import { Stroke } from '../../types';

export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const END_STROKE = 'END_STROKE';

export type HistoryIndexAction =
  | {
      type: typeof UNDO;
      payload: number;
    }
  | {
      type: typeof REDO;
    }
  | {
      type: typeof END_STROKE;
      payload: { stroke: Stroke; historyLimit: number };
    };

export const undo = createAction<number>('UNDO');
export const redo = createAction('REDO');

export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>('endStroke');
