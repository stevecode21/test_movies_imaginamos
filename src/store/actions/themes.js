import {TYPES} from '../../constants/types';
export const setTheme = (theme) => (dispatch) => {
  dispatch({type: TYPES.SET_THEME, payload: theme});
};
