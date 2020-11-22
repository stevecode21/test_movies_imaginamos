import {TYPES} from '../../constants/types';
const initialState = {
  theme: 'light',
};

export const themes = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
