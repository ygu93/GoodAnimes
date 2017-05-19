jest.mock('../../util/anime_api_util');
import AnimeMiddleware from '../anime_middleware';
import {
  REQUEST_ALL_ANIMES,
  REQUEST_ANIME,
  receiveAllAnimes,
  receiveAnime
} from '../../actions/anime_actions';

describe('Anime Middleware', () => {
  let dispatch;
  let mockNextAction;
  let mockAction;
  let AnimeApiUtil;

  beforeEach(() => {
    AnimeApiUtil = require('../../util/anime_api_util');
    dispatch = jest.fn();
    mockNextAction = jest.fn();
    mockAction = { type: "FAKE_ACTION" };
  })

  test('exports a function', () => {
    expect(typeof AnimeMiddleware).toEqual('function');
  })

  test('should return a properly curried function', () => {
    let nextFunction = AnimeMiddleware({ dispatch });
    expect(typeof nextFunction).toEqual('function');

    let actionFunction = nextFunction(mockNextAction);
    expect(typeof actionFunction).toEqual('function');

    let result = actionFunction(mockAction);
    expect(typeof result).not.toEqual('function');
  })

  describe('default action', () => {
    test('should call next on the passed in action', () => {
      AnimeMiddleware({ dispatch })(mockNextAction)(mockAction);
      expect(mockNextAction).toBeCalledWith(mockAction);
    })
  });

  describe('handling the REQUEST_ANIME action', () => {
    let requestAnimeAction;

    beforeEach(() => {
      requestAnimeAction = { type: 'REQUEST_ANIME', id: 1 };
      AnimeMiddleware({ dispatch })(mockNextAction)(requestAnimeAction);
    })

    afterEach(() => {
      AnimeApiUtil.fetchAnime.mockClear();
    })

    test("should call the api utils fetchAnime function", () => {
      expect(AnimeApiUtil.fetchAnime).toBeCalled();
    })

    test('should pass fetchAnime an id and a callback that dispatches a receiveAnime action', () => {
      let id = AnimeApiUtil.fetchAnime.mock.calls[0][0];
      expect(id).toEqual(requestAnimeAction.id);

      let actionCreator = AnimeApiUtil.fetchAnime.mock.calls[0][1];
      expect(typeof actionCreator).toEqual('function');

      actionCreator();
      expect(dispatch).toBeCalledWith(receiveAnime());
    })

    test('should call next with on the action', () => {
      expect(mockNextAction).toBeCalledWith(requestAnimeAction);
    })
  })

  describe('handling the REQUEST_ALL_ANIMES action', () => {
    let action;

    beforeEach(() => {
      action = { type: 'REQUEST_ALL_ANIMES' };
      AnimeMiddleware({ dispatch })(mockNextAction)(action);
    })

    afterEach(() => {
      AnimeApiUtil.fetchAllAnime.mockClear();
    })

    test("should call the anime api util's requestAllAnimes function", () => {
      expect(AnimeApiUtil.fetchAllAnime).toBeCalled();
    })

    test('should pass requestAllAnimes a callback that dispatches a receiveAllAnimes action', () => {
      let actionCreator = AnimeApiUtil.fetchAllAnime.mock.calls[0][0];
      expect(typeof actionCreator).toEqual('function');

      actionCreator();
      expect(dispatch).toBeCalledWith(receiveAllAnimes());
    })

    test('should call next on the action', () => {
      expect(mockNextAction).toBeCalledWith(action);
    })
  })
})
