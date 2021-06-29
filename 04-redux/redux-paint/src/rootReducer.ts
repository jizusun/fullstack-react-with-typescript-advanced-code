import { RootState } from './types';
import {
  Action,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
  UPDATE_STROKE,
} from './actions';

const initialState: RootState = {
  currentStoke: { points: [], color: 'red' },
  strokes: [],
  historyIndex: 0,
};

export const rootReducer = (
  state: RootState = initialState,
  action: Action
): RootState => {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStoke: {
          ...state.currentStoke,
          points: [action.payload],
        },
      };
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        currentStoke: {
          ...state.currentStoke,
          points: [...state.currentStoke.points, action.payload],
        },
      };
    }
    case END_STROKE: {
      if (!state.currentStoke.points.length) {
        return state;
      }
      return {
        ...state,
        currentStoke: { ...state.currentStoke, points: [] },
        strokes: [...state.strokes, state.currentStoke],
      };
    }
    case SET_STROKE_COLOR: {
      return {
        ...state,
        currentStoke: {
          ...state.currentStoke,
          ...{ color: action.payload },
        },
      };
    }
    case UNDO: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
