import {combineReducers} from 'redux';
import {movies} from './movies';
import {themes} from './themes';
export default combineReducers({
  reduxMovies: movies,
  reduxThemes: themes,
});
