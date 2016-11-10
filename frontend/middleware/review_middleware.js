import {REQUEST_ALL_REVIEWS,
        REQUEST_REVIEW,
        UPDATE_REVIEW,
        DESTROY_REVIEW,
        CREATE_REVIEW,
        EDIT_REVIEW,
        receiveReview,
        receiveAllReviews,
        removeReview,
        receiveReviewErrors,}
        from  '../actions/review_actions';

import {fetchReview,
        fetchAllReviews,
        updateReview,
        createReview,
        deleteReview,
        editReview} from '../util/review_api_util.js';

import {requestAnime} from '../actions/anime_actions';


const ReviewMiddleware = ({dispatch}) => next => action => {
  const receiveReviewSuccess = (data) => {
    dispatch(receiveReview(data));
    dispatch(requestAnime(data.id));
  };
  const receiveAllReviewsSuccess = data => dispatch(receiveAllReviews(data));
  const deleteReviewSuccess = data => {
    dispatch(removeReview(data));
  };
  const errorSuccess = (xhr) => dispatch(receiveReviewErrors(xhr.responseJSON));
  const createReviewSuccess = data => {
    dispatch(requestAnime(data.anime_id));
  };

  switch(action.type){
    case REQUEST_ALL_REVIEWS:
      fetchAllReviews(receiveAllReviewsSuccess);
      return next(action);
    case REQUEST_REVIEW:
      fetchReview(action.id, receiveReviewSuccess);
      return next(action);
    case UPDATE_REVIEW:
      updateReview(action.Review, receiveReviewSuccess, errorSuccess);
      return next(action);
    case DESTROY_REVIEW:
      deleteReview(action.id, deleteReviewSuccess);
      return next(action);
    case CREATE_REVIEW:
      createReview(action.review, createReviewSuccess, errorSuccess);
      return next(action);
    case EDIT_REVIEW:
      editReview(action.id, receiveReviewSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default ReviewMiddleware;
