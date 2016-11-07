import {REQUEST_ALL_ANIME_LIBRARIES,
        REQUEST_ANIME_LIBRARY,
        UPDATE_ANIME_LIBRARY,
        DESTROY_ANIME_LIBRARY,
        CREATE_ANIME_LIBRARY,
        EDIT_ANIME_LIBRARIES,
        receiveAnimeLibrary,
        receiveAllAnimeLibraries,
        removeAnimeLibrary,
        receiveAnimeLibraryErrors,
        requestAllAnimeLibraries
      } from  '../actions/anime_library_actions';

import {fetchAnimeLibrary,
        fetchAllAnimeLibraries,
        updateAnimeLibrary,
        createAnimeLibrary,
        deleteAnimeLibrary,
        editAnimeLibraries} from '../util/anime_library_util.js';

import {hashHistory} from 'react-router';

const AnimeLibraryMiddleware = ({dispatch}) => next => action => {
  const receiveAnimeLibrarySuccess = () => {
    dispatch(requestAllAnimeLibraries());
  };
  const receiveAllAnimeLibrariesSuccess = data => dispatch(receiveAllAnimeLibraries(data));
  const deleteAnimeLibrarySuccess = data => {
    dispatch(removeAnimeLibrary(data));
    dispatch(requestAllAnimeLibraries());
  };
  const errorSuccess = (xhr) => alert(xhr.responseJSON);
  const createAnimeLibrarySuccess = data => {
    dispatch(requestAllAnimeLibraries());
  };

  switch(action.type){
    case REQUEST_ALL_ANIME_LIBRARIES:
      fetchAllAnimeLibraries(receiveAllAnimeLibrariesSuccess);
      return next(action);
    case REQUEST_ANIME_LIBRARY:
      fetchAnimeLibrary(action.id, receiveAnimeLibrarySuccess);
      return next(action);
    case UPDATE_ANIME_LIBRARY:
      updateAnimeLibrary(action.animeLibrary, receiveAnimeLibrarySuccess, errorSuccess);
      return next(action);
    case DESTROY_ANIME_LIBRARY:
      deleteAnimeLibrary(action.id, deleteAnimeLibrarySuccess);
      return next(action);
    case CREATE_ANIME_LIBRARY:
      createAnimeLibrary(action.animeLibrary, createAnimeLibrarySuccess, errorSuccess);
      return next(action);
    case EDIT_ANIME_LIBRARIES:
      editAnimeLibraries(receiveAllAnimeLibrariesSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default AnimeLibraryMiddleware;
