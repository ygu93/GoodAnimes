import {combineReducers} from 'redux';
import SessionReducer from './session_reducer.js';
import AnimeReducer from './anime_reducer.js';

export default combineReducers({
  session: SessionReducer,
  anime: AnimeReducer
});
