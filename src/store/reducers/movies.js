import {TYPES} from '../../constants/types';
const initialState = {
  loading: false,
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOADING_MOVIES:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
