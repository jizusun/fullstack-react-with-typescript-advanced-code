import {
  Action,
  UPDATE_STROKE,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
  beginStroke,
  updateStroke,
  setStrokeColor,
  endStroke,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../types';

const initialState: RootState['currentStoke'] = {
  points: [],
  color: '#000',
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(beginStroke, (state, action) => {
    state.points = [action.payload];
  });
  builder.addCase(updateStroke, (state, action) => {
    state.points.push(action.payload);
  });
  builder.addCase(setStrokeColor, (state, action) => {
    state.color = action.payload;
  });
  builder.addCase(endStroke, (state, action) => {
    state.points = [];
  });
});

// export const reducer = (
//   state: RootState['currentStoke'] = initialState,
//   action: Action
// ): RootState['currentStoke'] => {
//   switch (action.type) {
//     case BEGIN_STROKE: {
//       return {
//         ...state,
//         points: [action.payload],
//       };
//     }
//     case UPDATE_STROKE: {
//       return {
//         ...state,
//         points: [...state.points, action.payload],
//       };
//     }
//     case END_STROKE: {
//       return {
//         ...state,
//         points: [],
//       };
//     }
//     case SET_STROKE_COLOR: {
//       return {
//         ...state,
//         color: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
