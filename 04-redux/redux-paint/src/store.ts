import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { Middleware } from 'redux';
import { reducer as historyIndex } from './modules/historyIndex/reducer';
import { reducer as currentStoke } from './modules/currentStroke/reducer';
import { reducer as strokes } from './modules/strokes/reducer';

let middleware: Middleware[] = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export const store = configureStore({
  reducer: combineReducers({
    historyIndex,
    currentStoke,
    strokes,
  }),
  middleware,
});
