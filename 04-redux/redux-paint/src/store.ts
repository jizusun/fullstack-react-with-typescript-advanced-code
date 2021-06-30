import {
  configureStore,
  getDefaultMiddleware,
  Action,
  // combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { Middleware } from 'redux';
import { currentStoke } from './modules/currentStrokeSlice';
import { historyIndex } from './modules/historyIndexSlice';
import { strokes } from './modules/strokesSlice';

let middleware: Middleware[] = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...getDefaultMiddleware(), logger];
} else {
  middleware = [...getDefaultMiddleware()];
}

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStoke,
    strokes,
  },
  middleware,
});
