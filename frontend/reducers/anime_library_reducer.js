import {RECEIVE_ALL_ANIME_LIBRARIES,
        RECEIVE_ANIME_LIBRARY,
        REMOVE_ANIME_LIBRARY,
        RECEIVE_ANIME_LIBRARY_ERRORS} from '../actions/anime_library_actions';
import merge from 'lodash/merge';
import {REMOVE_LIB_REVIEW, RECEIVE_LIB_REVIEW} from '../actions/review_actions';
import {RECEIVE_USER_ANIME, REMOVE_USER_ANIME} from '../actions/user_anime_actions';


const AnimeLibraryReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_ANIME_LIBRARIES:
      return action.animeLibraries;
    case RECEIVE_ANIME_LIBRARY:
      return merge({}, state, action.animeLibrary);
    case REMOVE_ANIME_LIBRARY:
      delete dup[action.id.id];
      return dup;
    case RECEIVE_ANIME_LIBRARY_ERRORS:
      dup["errors"]  = action.errors;
      return dup;
    case RECEIVE_LIB_REVIEW:
      let keys = Object.keys(dup);
      let i = 0;
      while (i < keys.length) {
        let i2 = 0;
        while (i2 < dup[keys[i]].animes.length) {
          if(dup[keys[i]].animes[i2].id === action.review.anime_id){
            dup[keys[i]].animes[i2].currentUserReview = action.review;
          }
          i2+=1;
        }
        i +=1;
      }
      return dup;
    case REMOVE_LIB_REVIEW:
      let keys2 = Object.keys(dup);
      let j = 0;
      while (j < keys2.length) {
        let j2 = 0;
        while (j2 < dup[keys2[j]].animes.length) {
          if(dup[keys2[j]].animes[j2].id === action.review.anime_id){
            dup[keys2[j]].animes[j2].currentUserReview = null;
          }
          j2+=1;
        }
        j +=1;
      }
      return dup;
    case RECEIVE_USER_ANIME:
      let libIdsToChange = Object.keys(dup).filter((key) => action.userAnime.libraries.includes(dup[key].name));
      libIdsToChange.forEach((id) => dup[id].animes.push(action.userAnime));
      return dup;
    default:
      return state;
  }
};



export default AnimeLibraryReducer;
