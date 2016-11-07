import {RECEIVE_ALL_ANIME_LIBRARIES,
        RECEIVE_ANIME_LIBRARY,
        REMOVE_ANIME_LIBRARY,
        RECEIVE_ANIME_LIBRARY_ERRORS} from '../actions/anime_library_actions';
import merge from 'lodash/merge';



const AnimeLibraryReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_ANIME_LIBRARIES:
      return action.animeLibraries;
    case RECEIVE_ANIME_LIBRARY:
      return merge({}, state, action.animeLibrary);
    case REMOVE_ANIME_LIBRARY:
      delete dup[action.id];
      return dup;
    case RECEIVE_ANIME_LIBRARY_ERRORS:
      dup["errors"]  = action.errors;
      return dup;
    default:
      return state;
  }
};



export default AnimeLibraryReducer;
