export const REQUEST_ALL_ANIME_LIBRARIES = 'REQUEST_ALL_ANIME_LIBRARIES';
export const RECEIVE_ALL_ANIME_LIBRARIES = 'RECEIVE_ALL_ANIME_LIBRARIES';
export const REQUEST_ANIME_LIBRARY ='REQUEST_ANIME_LIBRARY';
export const RECEIVE_ANIME_LIBRARY = 'RECEIVE_ANIME_LIBRARY';
export const UPDATE_ANIME_LIBRARY = 'UPDATE_ANIME_LIBRARY';
export const DESTROY_ANIME_LIBRARY = 'DESTROY_ANIME_LIBRARY';
export const REMOVE_ANIME_LIBRARY = 'REMOVE_ANIME_LIBRARY';
export const CREATE_ANIME_LIBRARY = 'CREATE_ANIME_LIBRARY';
export const RECEIVE_ANIME_LIBRARY_ERRORS = 'RECEIVE_ANIME_LIBRARY_ERRORS';
export const EDIT_ANIME_LIBRARIES = 'EDIT_ANIME_LIBRARIES';

export const requestAllAnimeLibraries = () =>({
  type: REQUEST_ALL_ANIME_LIBRARIES
});

export const receiveAllAnimeLibraries = (animeLibraries) => ({
  type: RECEIVE_ALL_ANIME_LIBRARIES,
  animeLibraries
});

export const requestAnimeLibrary = (id) => ({
  type: REQUEST_ANIME_LIBRARY,
  id
});

export const receiveAnimeLibrary = (animeLibrary) => ({
  type: RECEIVE_ANIME_LIBRARY,
  animeLibrary
});

export const updateAnimeLibrary = (animeLibrary) => ({
  type: UPDATE_ANIME_LIBRARY,
  animeLibrary
});

export const destroyAnimeLibrary = (id) => ({
  type:DESTROY_ANIME_LIBRARY,
  id
});

export const editAnimeLibraries = (id) => ({
  type:EDIT_ANIME_LIBRARIES,
  id
});

export const removeAnimeLibrary = (id) => ({
  type: REMOVE_ANIME_LIBRARY,
  id
});

export const createAnimeLibrary = (animeLibrary) => ({
  type: CREATE_ANIME_LIBRARY,
  animeLibrary
});

export const receiveAnimeLibraryErrors =  (errors) => ({
  type: RECEIVE_ANIME_LIBRARY_ERRORS,
  errors
});
