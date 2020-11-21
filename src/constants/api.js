import {API_URL, API_KEY, IMAGES} from './env.config';

export const ROUTES = {
  GET_DISCOVER_MOVIE: `${API_URL}/discover/movie?api_key=${API_KEY}`,
  GET_TOP_RATED: `${API_URL}/movie/top_rated?api_key=${API_KEY}`,

  IMAGES: IMAGES,
};
