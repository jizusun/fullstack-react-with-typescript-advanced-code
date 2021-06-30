import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../types';
import {
  HistoryIndexAction,
  UNDO,
  REDO,
  END_STROKE,
  undo,
  redo,
  endStroke,
} from './actions';

// export const reducer = (
//   state: RootState['historyIndex'] = 0,
//   action: HistoryIndexAction
// ): RootState['historyIndex'] => {
//   switch (action.type) {
//     case END_STROKE: {
//       return 0;
//     }
//     case UNDO: {
//       return Math.min(state + 1, action.payload);
//     }
//     case REDO: {
//       return Math.max(state - 1, 0);
//     }
//     default:
//       return state;
//   }
// };

const initialState: RootState['historyIndex'] = 0;

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(undo, (state, action) => {
    return Math.min(state + 1, action.payload);
  });
  builder.addCase(redo, (state, action) => {
    return Math.max(state - 1, 0);
  });
  builder.addCase(endStroke, (state, action) => {
    return 0;
  });
});
