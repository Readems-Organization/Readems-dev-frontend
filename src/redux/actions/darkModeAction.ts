/* eslint-disable no-unreachable */
import { DarkLightModeTypes } from '../types';

export const darkModeAction = (variable: string | null) => {
  return {
    type: DarkLightModeTypes.DARK_MODE,
    payload: variable,
  };
};
