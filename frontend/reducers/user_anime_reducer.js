import {RECEIVE_USER_ANIME,
        REMOVE_USER_ANIME,
        RECEIVE_USER_ANIME_ERRORS} from '../actions/user_anime_actions';
import merge from 'lodash/merge';



const UserAnimeReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_USER_ANIME:
      return merge({}, state, action.userAnime);
    case RECEIVE_USER_ANIME_ERRORS:
      dup["errors"]  = action.errors;
      return dup;
    default:
      return state;
  }
};



export default UserAnimeReducer;
