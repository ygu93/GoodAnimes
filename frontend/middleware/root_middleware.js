import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import AnimeMiddleware from './anime_middleware';
import AnimeLibraryMiddleware from './anime_library_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware, AnimeMiddleware, AnimeLibraryMiddleware);

export default RootMiddleware;
