import { combineReducers } from 'redux';
import { darkMode } from './darkModeReducer';
// import { InitialDarkLightMode } from '../reduxInterface';
// export interface StoreState {
//   darkMode: InitialDarkLightMode;
// }

export const reducers = combineReducers({
  darkMode,
});

export type State = ReturnType<typeof reducers>;
