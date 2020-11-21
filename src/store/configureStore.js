import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const initialState = {};
const middleware = [thunkMiddleware];

let configureStore = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    typeof window === 'object' &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default configureStore;
