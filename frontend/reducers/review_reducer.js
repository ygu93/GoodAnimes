import {RECEIVE_ALL_REVIEWS,
        RECEIVE_REVIEW,
        REMOVE_REVIEW,
        RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';
import merge from 'lodash/merge';



const ReviewReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    case REMOVE_REVIEW:
      delete dup[action.id];
      return dup;
    case RECEIVE_REVIEW_ERRORS:
      dup["errors"]  = action.errors;
      return dup;
    default:
      return state;
  }
};


export default ReviewReducer;
