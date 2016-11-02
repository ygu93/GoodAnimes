export const REQUEST_ALL_ANIME = 'REQUEST_ALL_ANIME';
export const RECEIVE_ALL_ANIMES = 'RECEIVE_ALL_ANIMES';
export const REQUEST_ANIME = 'REQUEST_ANIME';
export const RECEIVE_ANIME = 'RECEIVE_ANIME';


export const requestAllAnime = () => ({
  type: REQUEST_ALL_ANIME
});

export const receiveAllAnimes = (animes) => ({
  type: RECEIVE_ALL_ANIMES,
  animes
});

export const requestAnime = (id) => ({
  type: REQUEST_ANIME,
  id
});

export const receiveAnime = (anime) => ({
  type: RECEIVE_ANIME,
  anime
});
