import { RootState, Stroke } from './types';

export const currentStrokeSelector = (state: RootState): Stroke =>
  state.currentStoke;
