import {REQUEST_ALL_ANIME_LIBRARIES,
        REQUEST_ANIME_LIBRARY,
        UPDATE_ANIME_LIBRARY,
        DESTROY_ANIME_LIBRARY,
        CREATE_ANIME_LIBRARY,
        receiveAnimeLibrary,
        receiveAllAnimeLibraries,
        removeAnimeLibrary,
        receiveAnimeLibraryErrors
      } from  '../actions/anime_library_actions';

import {fetchAnimeLibrary,
        fetchAllAnimeLibraries,
        updateAnimeLibrary,
        createAnimeLibrary,
        deleteAnimeLibrary} from '../util/anime_library_util.js';



const AnimeLibraryMiddleware = ({dispatch}) => next => action => {
  const receiveAnimeLibrarySuccess = data => dispatch(receiveAnimeLibrary(data));
  const receiveAllAnimeLibrariesSuccess = data => dispatch(receiveAllAnimeLibraries(data));
  const deleteAnimeLibrarySuccess = data => dispatch(removeAnimeLibrary(data));
  const errorSuccess = (xhr) => dispatch(receiveAnimeLibraryErrors(xhr.responseJSON));
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
      return next(action);
    default:
      return next(action);
  }

};

export default AnimeMiddleware;
