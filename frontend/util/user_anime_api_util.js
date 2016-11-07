export const fetchUserAnime = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/user_animes/${id}`,
    success
  });
};

export const editUserAnime = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/user_animes/${id}/edit`,
    success
  });
};

export const updateUserAnime = (userAnime, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/user_animes/${userAnime.id}`,
    data: {user_anime: userAnime},
    success,
    error
  });
};

export const createUserAnime = (userAnime, success, error) => {
  $.ajax({
    method: 'POST',
    dataType:'json',
    url: "api/user_animes",
    data: {user_anime: userAnime},
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
