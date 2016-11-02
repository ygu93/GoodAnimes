import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import AnimeMiddleware from './anime_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware, AnimeMiddleware);

export default RootMiddleware;
