import {combineReducers} from 'redux';
import SessionReducer from './session_reducer.js';
import AnimeReducer from './anime_reducer.js';
import AnimeLibraryReducer from './anime_library_reducer';

export default combineReducers({
  session: SessionReducer,
  anime: AnimeReducer,
  animeLibrary: AnimeLibraryReducer
});
