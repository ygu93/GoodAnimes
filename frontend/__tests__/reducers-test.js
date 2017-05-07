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

    describe('handling the RECEIVE_CURRENT_USER action', () => {
      let action;
      let fakeUser;

      beforeEach(() => {
        fakeUser = { username: 'Illyasviel' }
        action = {
          type: 'RECEIVE_CURRENT_USER',
          currentUser: fakeUser
        }
      });

      it('should replace the state with the new current user', () => {
        const state = SessionReducer(undefined, action);
        expect(state.currentUser).toEqual(fakeUser);
      });

      it('should reset the errors array to blank', () => {
        const state = SessionReducer({ currentUser: null, errors:['fake Error']}, action);
        expect(state.errors).toEqual([]);
      });

      it('should not modify the old state', () => {
        let oldState = { currentUser: { username: 'Tohsaka Rin' }, errors: [] };
        SessionReducer(oldState, action)
        expect(oldState).toEqual({ currentUser: { username: 'Tohsaka Rin' }, errors: [] });
      });
    });

    describe('handling the RECEIVE_ERRORS action', () => {
      let action;
      let testError;

      beforeEach(() => {
        testError = ['cannot compute'];
        action = {
          type: 'RECEIVE_ERRORS',
          errors: testError
        };
      });

      it('should set the current user to null', () => {
        let oldState = { currentUser: { username: 'Tohsaka Rin' }, errors: [] };
        const state = SessionReducer(oldState, action);
        expect(state.currentUser).toBeNull();
      });

      it('should set the errors array to the newly received errors', () => {
        const state = SessionReducer(undefined, action);
        expect(state.errors).toEqual(testError);
      });
    });


  });
});
