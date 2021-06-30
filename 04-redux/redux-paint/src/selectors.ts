import { RootState, Stroke } from './types';

// https://github.com/gabrielEloy/react-paint/blob/b9a4cd8e280985909d4264669a04af6b585d121f/src/selectors.ts#L5-L10
export const strokesSelector = (state: RootState) => state.strokes;
