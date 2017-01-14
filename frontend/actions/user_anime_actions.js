
export const REQUEST_USER_ANIME ='REQUEST_USER_ANIME';
export const RECEIVE_USER_ANIME = 'RECEIVE_USER_ANIME';
export const UPDATE_USER_ANIME = 'UPDATE_USER_ANIME';
export const DESTROY_USER_ANIME = 'DESTROY_USER_ANIME';
export const REMOVE_USER_ANIME = 'REMOVE_USER_ANIME';
export const CREATE_USER_ANIME = 'CREATE_USER_ANIME';
export const RECEIVE_USER_ANIME_ERRORS = 'RECEIVE_USER_ANIME_ERRORS';
export const EDIT_USER_ANIME = 'EDIT_USER_ANIME';


export const requestUserAnime = (id) => ({
  type: REQUEST_USER_ANIME,
  id
});

export const receiveUserAnime = (userAnime) => ({
  type: RECEIVE_USER_ANIME,
  userAnime
});

export const updateUserAnime = (userAnime) => ({
  type: UPDATE_USER_ANIME,
  userAnime
});

export const destroyUserAnime = (id) => ({
  type:DESTROY_USER_ANIME,
  id
});

export const removeUserAnime = (userAnime) => ({
  type: REMOVE_USER_ANIME,
  userAnime
});

export const createUserAnime = (userAnime) => ({
  type: CREATE_USER_ANIME,
  userAnime
});

export const receiveUserAnimeErrors =  (errors) => ({
  type: RECEIVE_USER_ANIME_ERRORS,
  errors
});

export const editUserAnime = (id) => ({
  type:EDIT_USER_ANIME,
  id
});
