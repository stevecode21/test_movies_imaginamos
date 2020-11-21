import {TYPES} from '../../constants/types';
const initialState = {
  loading: false,
  movies: [],
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOADING_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_DISCOVER_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload.results,
      };
    default:
      return state;
  }
};
