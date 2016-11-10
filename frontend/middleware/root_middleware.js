import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import AnimeMiddleware from './anime_middleware';
import AnimeLibraryMiddleware from './anime_library_middleware';
import UserAnimeMiddleware from './user_anime_middleware';
import ReviewMiddleware from './review_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware,
                                       AnimeMiddleware,
                                       AnimeLibraryMiddleware,
                                       UserAnimeMiddleware,
                                       ReviewMiddleware);

export default RootMiddleware;
