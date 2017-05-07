import SessionReducer from '../reducers/session_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('SessionReducer', () => {
    it('exports a function', () => {
      expect(typeof SessionReducer).toEqual('function')
    });

    it('should initialize with a currentUser and errors key', () => {
      expect(SessionReducer(undefined, {})).toEqual({ currentUser: null, errors: [] })
    });

    it('should return the previous state if an action is unmatched', () => {
      const oldState = { 1: 'oldState'};
      const newState = SessionReducer(oldState, { type: 'faker type'});
      expect(newState).toEqual(oldState);
    })
  });
});
