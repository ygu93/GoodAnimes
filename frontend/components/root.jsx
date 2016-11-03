import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import GreetingsContainer from './greeting/greeting_container';
import AnimeIndexContainer from './anime/anime_index_container';
import {requestAllAnime} from '../actions/anime_actions';


const Root = ({ store }) => {
  const requestAnimeIndex = () => store.dispatch(requestAllAnime());

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };
  return(

    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GreetingsContainer} />
          <Route path="anime" component ={AnimeIndexContainer} onEnter={requestAnimeIndex}/>
        </Route>
      </Router>
    </Provider>
);
};

export default Root;
