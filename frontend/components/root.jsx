import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import GreetingsContainer from './greeting/greeting_container';
import AnimeIndexContainer from './anime/anime_index_container';
import {requestAllAnimes, requestAnime} from '../actions/anime_actions';
import {requestAllAnimeLibraries, requestAnimeLibrary} from '../actions/anime_library_actions';
import AnimeDetailsContainer from './anime/anime_details_container';
import AnimeLibraryIndexContainer from './anime_library/anime_library_index_container';


const Root = ({ store }) => {
  const requestAnimeIndex = () => store.dispatch(requestAllAnimes());
  const requestSingleAnime = (nextState) => {
    return store.dispatch(requestAnime(nextState.params.animeId));
  };

  const requestAnimeLibraryIndex = () => store.dispatch(requestAllAnimeLibraries());
  const requestSingleAnimeLibrary = (nextState) => {
    return store.dispatch(requestAnimeLibrary(nextState.params.animeLibraryId));
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }else if(nextState.location.pathname ==="/animes"){
      requestAnimeIndex();
    }else if(nextState.location.pathname==="/home"){
      requestAnimeLibraryIndex();
    }else if(nextState.params.animeId){
      requestSingleAnime(nextState);
      requestAnimeLibraryIndex();
    }
  };
  return(

    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GreetingsContainer} />
          <Route path="animes" component ={AnimeIndexContainer} onEnter={_ensureLoggedIn}></Route>
          <Route path="anime/:animeId" component={AnimeDetailsContainer} onEnter={_ensureLoggedIn}></Route>
          <Route path="home" component ={AnimeLibraryIndexContainer} onEnter={_ensureLoggedIn}></Route>
        </Route>
      </Router>
    </Provider>
);
};

export default Root;
