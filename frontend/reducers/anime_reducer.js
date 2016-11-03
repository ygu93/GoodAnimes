import React from 'react';
import {RECEIVE_ANIME, RECEIVE_ALL_ANIMES} from '../actions/anime_actions.js';
import merge from 'lodash/merge';

const AnimeReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_ANIMES:
      return action.animes;
    case RECEIVE_ANIME:
      return merge({}, state, action.anime);
    default:
      return state;
  }
};



export default AnimeReducer;
