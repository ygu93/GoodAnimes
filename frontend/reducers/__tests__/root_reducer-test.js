import RootReducer from '../root_reducer';
import { createStore } from 'redux';

describe('RootReducer', ()=>{
  let testStore;

  beforeAll(() => {
    testStore = createStore(RootReducer)
  })

  it('exports a function', () => {
    expect(typeof RootReducer).toEqual('function');
  })
})
