import {REQUEST_USER_ANIME,
        UPDATE_USER_ANIME,
        DESTROY_USER_ANIME,
        CREATE_USER_ANIME,
        RECEIVE_USER_ANIME_ERRORS,
        EDIT_USER_ANIME,
        receiveUserAnime,
        removeUserAnime,
        receiveUserAnimeErrors
      } from  '../actions/user_anime_actions';

import {fetchUserAnime,
        updateUserAnime,
        createUserAnime,
        deleteUserAnime,
        editUserAnime} from '../util/user_anime_api_util';

import {requestAllAnimeLibraries} from  '../actions/anime_library_actions';

import {hashHistory} from 'react-router';

const UserAnimeMiddleware = ({dispatch}) => next => action => {
  const receiveUserAnimeSuccess = (data) => {
    dispatch(receiveUserAnime(data));
  };
  const deleteUserAnimeSuccess = data => {
    // dispatch(removeUserAnime(data));
    dispatch(requestAllAnimeLibraries());
  };
  const errorSuccess = (xhr) => dispatch(receiveUserAnimeErrors(xhr.responseJSON));

  switch(action.type){
    case REQUEST_USER_ANIME:
      fetchUserAnime(action.id, receiveUserAnimeSuccess);
      return next(action);
    case CREATE_USER_ANIME:
      createUserAnime(action.userAnime, receiveUserAnimeSuccess);
      return next(action);
    case UPDATE_USER_ANIME:
      updateUserAnime(action.userAnime, receiveUserAnimeSuccess, errorSuccess);
      return next(action);
    case DESTROY_USER_ANIME:
      deleteUserAnime(action.id, deleteUserAnimeSuccess);
      return next(action);

    default:
      return next(action);
  }

};

export default UserAnimeMiddleware;
