import React from 'react';
import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _defaultState = {
    currentUser: null,
    errors: []
  };

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      dup.currentUser = action.currentUser;
      dup.errors = [];
      return dup;
    case RECEIVE_ERRORS:
      dup.currentUser = null;
      dup.errors = action.errors;
      return dup;
    case LOGOUT:
      dup.currentUser = null;
      dup.errrors = [];
      return dup;
    default:
       return state;
  }
};

export default SessionReducer;
