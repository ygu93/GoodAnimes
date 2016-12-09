import React from 'react';
import {RECEIVE_ANIME, RECEIVE_ALL_ANIMES} from '../actions/anime_actions.js';
import {REMOVE_REVIEW, RECEIVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_USER_ANIME, REMOVE_USER_ANIME} from '../actions/user_anime_actions';
import merge from 'lodash/merge';

const AnimeReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_ANIMES:
      return action.animes;
    case RECEIVE_ANIME:
      // return merge({}, state, action.anime);
      return action.anime;
    case REMOVE_REVIEW:
      let index = dup.reviews.indexOf(dup.reviews.filter((rev)=> rev.id === action.review.id)[0]);
      delete dup.reviews[index];
      dup.currentUserReview = null;
      return dup;
    case RECEIVE_REVIEW:
      dup.currentUserReview = action.review;
      if(dup.reviews.map(rev => rev.id).includes(action.review.id)){
        let revToUpdate = dup.reviews.filter(key=> key.id === action.review.id)[0];
        let revIndex = dup.reviews.indexOf(revToUpdate);
        dup.reviews[revIndex] = action.review;
        return dup;
      }else{
        dup.reviews.push(action.review);
        return dup;
      }
    case RECEIVE_USER_ANIME:
      dup.libraries = action.userAnime.libraries;
      return dup;
    case REMOVE_USER_ANIME:
      dup.libraries = action.id.libraries;
      return dup;
    default:
      return state;
  }
};



export default AnimeReducer;
