import React from 'react';
import {RECEIVE_ANIME, RECEIVE_ALL_ANIMES} from '../actions/anime_actions.js';
import {REMOVE_REVIEW, RECEIVE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const AnimeReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_ANIMES:
      return action.animes;
    case RECEIVE_ANIME:
      return merge({}, state, action.anime);
    case REMOVE_REVIEW:
      let index = dup.reviews.indexOf(dup.reviews.filter((rev)=> rev.id === action.review.id)[0]);
      delete dup.reviews[index];
      dup.currentUserReview = null;
      return dup;
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    default:
      return state;
  }
};



export default AnimeReducer;
