export const REQUEST_ALL_REVIEWS = 'REQUEST_ALL_REVIEWS';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REQUEST_REVIEW ='REQUEST_REVIEW';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DESTROY_REVIEW = 'DESTROY_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const EDIT_REVIEW = 'EDIT_REVIEW';
export const DESTROY_LIB_REVIEW = 'DESTROY_LIB_REVIEW';
export const REMOVE_LIB_REVIEW = 'REMOVE_LIB_REVIEW';

export const requestAllReviews = () =>({
  type: REQUEST_ALL_REVIEWS
});

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const requestReview = (id) => ({
  type: REQUEST_REVIEW,
  id
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
});

export const destroyReview = (review) => ({
  type:DESTROY_REVIEW,
  review
});

export const destroyLibReview = (review) => ({
  type:DESTROY_LIB_REVIEW,
  review
});

export const editReview = (id) => ({
  type:EDIT_REVIEW,
  id
});

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const removeLibReview = (review) => ({
  type: REMOVE_LIB_REVIEW,
  review
});

export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const receiveReviewErrors =  (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
