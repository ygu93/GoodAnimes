export const fetchAllAnime = (success) => {
  $.ajax({
    method:'GET',
    url: 'api/animes',
    success
  });
};

export const fetchAnime = (id, success, error) => {
  $.ajax({
    method:'GET',
    url: `api/animes/${id}`,
    success,
    error
  });
};
