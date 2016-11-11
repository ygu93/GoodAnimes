import {REQUEST_ALL_REVIEWS,
        REQUEST_REVIEW,
        UPDATE_REVIEW,
        DESTROY_REVIEW,
        CREATE_REVIEW,
        EDIT_REVIEW,
        DESTROY_LIB_REVIEW,
        CREATE_LIB_REVIEW,
        UPDATE_LIB_REVIEW,
        receiveReview,
        receiveAllReviews,
        removeReview,
        receiveReviewErrors,
        removeLibReview,
        receiveLibReview}
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
  };
  const receiveAllReviewsSuccess = data => dispatch(receiveAllReviews(data));
  const deleteReviewSuccess = data => {
    dispatch(removeReview(data));
  };
  const errorSuccess = (xhr) => dispatch(receiveReviewErrors(xhr.responseJSON));
  const createReviewSuccess = data => {
    dispatch(receiveReview(data));
  };

  const deleteLibReviewSuccess = data => {
    dispatch(removeLibReview(data));
  };

  const receiveLibReviewSuccess = data => {
    dispatch(receiveLibReview(data));
  };

  switch(action.type){
    case REQUEST_REVIEW:
      fetchReview(action.id, receiveReviewSuccess);
      return next(action);
    case UPDATE_REVIEW:
      updateReview(action.review, receiveReviewSuccess, errorSuccess);
      return next(action);
    case DESTROY_REVIEW:
      deleteReview(action.review, deleteReviewSuccess);
      return next(action);
    case CREATE_REVIEW:
      createReview(action.review, createReviewSuccess, errorSuccess);
      return next(action);
    case EDIT_REVIEW:
      editReview(action.id, receiveReviewSuccess);
      return next(action);
    case DESTROY_LIB_REVIEW:
      deleteReview(action.review, deleteLibReviewSuccess);
      return next(action);
    case CREATE_LIB_REVIEW:
      createReview(action.review, receiveLibReviewSuccess);
      return next(action);
    case UPDATE_LIB_REVIEW:
      updateReview(action.review, receiveLibReviewSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default ReviewMiddleware;
