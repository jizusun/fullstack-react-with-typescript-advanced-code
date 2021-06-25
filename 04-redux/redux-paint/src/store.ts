import { rootReducer } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import * as Redux from 'redux';

let middleware: Redux.Middleware[] = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
