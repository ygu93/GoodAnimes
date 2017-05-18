import configureStore from '../store';
jest.mock('redux');

describe('Store', () => {
  let createStore;
  let RootReducer;
  let RootMiddleware;

  beforeEach(() => {
    createStore = require('redux').createStore;
    RootReducer = require('../../reducers/root_reducer');
    RootMiddleware = require('../../middleware/root_middleware');
  })

  test('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  })

  test('the function should create a store', () => {
    configureStore();
    expect(createStore).toBeCalled();
  })
})
