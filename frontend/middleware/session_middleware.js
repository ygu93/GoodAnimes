import {LOGIN, LOGOUT, SIGNUP, receiveCurrentUser, receiveErrors} from '../actions/session_actions.js';
import {login, logout, signup} from '../util/session_api_util.js';
import {hashHistory} from 'react-router';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const handleSuccess = (user) => dispatch(receiveCurrentUser(user));
  const errorSuccess = (xhr) => dispatch(receiveErrors(xhr.responseJSON));
  const receiveLogoutSuccess = () => {
    hashHistory.push('/');
  };
  switch(action.type){
    case LOGIN:
      login(action.user, handleSuccess, errorSuccess);
      return next(action);
    case SIGNUP:
      signup(action.user, handleSuccess, errorSuccess);
      return next(action);
    case LOGOUT:
      logout(receiveLogoutSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default SessionMiddleware;
