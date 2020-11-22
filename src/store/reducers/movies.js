import {TYPES} from '../../constants/types';
const initialState = {
  loading: false,
  movies: [],
  ratedMovies: [],
  credits: [],
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
    case TYPES.GET_TOP_RATED:
      return {
        ...state,
        loading: false,
        ratedMovies: action.payload.results,
      };
    case TYPES.GET_CREDITS_MOVIES:
      return {
        ...state,
        loading: false,
        credits: action.payload.cast,
      };
    default:
      return state;
  }
};
