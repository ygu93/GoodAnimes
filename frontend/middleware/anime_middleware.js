import {fetchAllAnime, fetchAnime} from '../util/anime_api_util';
import {REQUEST_ANIME, REQUEST_ALL_ANIMES, receiveAnime, receiveAllAnimes} from '../actions/anime_actions.js';

const AnimeMiddleware = ({ dispatch }) => next => action => {
  const receiveAnimeSuccess = data => dispatch(receiveAnime(data));
  const receiveAllAnimeSuccess = data => dispatch(receiveAllAnimes(data));
  switch(action.type){
    case REQUEST_ANIME:
      fetchAnime(action.id, receiveAnimeSuccess);
      return next(action);
    case REQUEST_ALL_ANIMES:
      fetchAllAnime(receiveAllAnimeSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default AnimeMiddleware;
