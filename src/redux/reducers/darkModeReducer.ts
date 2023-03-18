import { DarkLightModeTypes } from '../types';

export const darkMode = (state = {}, action: any) => {
  console.log(state);
  switch (action.type) {
    case DarkLightModeTypes.DARK_MODE:
      return action.payload;
    default:
      return state;
  }
};
