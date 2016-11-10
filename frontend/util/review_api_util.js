export const fetchAllReviews = (success) => {
  $.ajax({
    method:'GET',
    url: 'api/reviews',
    success
  });
};

export const fetchReview = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`,
    success
  });
};

export const editReview = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/reviews/${id}/edit`,
    success
  });
};

export const updateReview = (review, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: {review: review},
    success,
    error
  });
};

export const createReview = (review, success, error) => {
  debugger
  $.ajax({
    method: 'POST',
    dataType:'json',
    url: "api/reviews",
    data: {review: review},
    success,
    error
  });
};

export const deleteReview = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`,
    success,
    error
  });
};
