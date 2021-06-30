import { RootState } from '../../types';

export const historyIndexSelector = (
  state: RootState
): RootState['historyIndex'] => state.historyIndex;
