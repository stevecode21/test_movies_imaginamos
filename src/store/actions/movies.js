import {TYPES} from '../../constants/types';
import {ROUTES} from '../../constants/api';
import Axios from 'axios';
export const getDiscoverMovies = () => async (dispatch) => {
  try {
    console.log(ROUTES.GET_DISCOVER_MOVIE);
    let res = await Axios.get(ROUTES.GET_DISCOVER_MOVIE);

    dispatch({type: TYPES.GET_DISCOVER_MOVIES, payload: res.data});
  } catch (error) {
    throw handler(error);
  }
};

export const handler = (error) => {
  if (error.response && error.response.data) {
    return error.response.data;
  }
  console.log('err', error);
  return error;
};
