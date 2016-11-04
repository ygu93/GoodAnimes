export const fetchAllAnimeLibraries = (success) => {
  $.ajax({
    method:'GET',
    url: 'api/anime_libraries',
    success
  });
};

export const fetchAnimeLibrary = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/anime_libraries/${id}`,
    success
  });
};

export const updateAnimeLibrary = (animeLibrary, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/anime_libraries/${animeLibrary.id}`,
    data: {animeLibrary},
    success,
    error
  });
};

export const createAnimeLibrary = (animeLibrary, success, error) => {
  $.ajax({
    method: 'POST',
    url: "api/anime_libraries",
    data: {animeLibrary},
    success,
    error
  });
};

export const deleteAnimeLibrary = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/anime_libraries/${id}`,
    success,
    error
  });
};
