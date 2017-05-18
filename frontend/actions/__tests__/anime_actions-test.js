import {
  REQUEST_ALL_ANIMES,
  RECEIVE_ALL_ANIMES,
  RECEIVE_ANIME,
  REQUEST_ANIME,
  requestAllAnimes,
  receiveAllAnimes,
  requestAnime,
  receiveAnime
} from '../anime_actions';

describe('anime actions', ()=>{
  describe('AnimeConstants', ()=>{
    test('should contain a REQUEST_ALL_ANIMES constant', () => {
      expect(REQUEST_ALL_ANIMES).toEqual('REQUEST_ALL_ANIMES');
    })

    test('should contain a RECEIVE_ALL_ANIMES constant', () => {
      expect(RECEIVE_ALL_ANIMES).toEqual('RECEIVE_ALL_ANIMES');
    })

    test('should contain a RECEIVE_ANIME constant', () => {
      expect(RECEIVE_ANIME).toEqual('RECEIVE_ANIME');
    })

    test('should contain a REQUEST_ANIME consant', () => {
      expect(REQUEST_ANIME).toEqual('REQUEST_ANIME');
    })
  })

  describe('requestAllAnimes', () => {
    test('should export a requestAllAnimes function', ()=>{
      expect(typeof requestAllAnimes).toEqual('function');
    })

    test('should return an action with the type "REQUEST_ALL_ANIMES"', () => {
      let action = requestAllAnimes();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual(REQUEST_ALL_ANIMES);
    })
  })

  describe('requestAnime', () => {
    test('should export a requestAnime function', () => {
      expect(typeof requestAnime).toEqual('function');
    })

    test('should return an action with the type "REQUEST_ANIME"', () => {
      let action = requestAnime();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual(REQUEST_ANIME);
    })

    test("should take in an id and set it as the action's id property", () => {
      let action = requestAnime(1);
      expect(action.id).toEqual(1);
    })
  })

  describe('receiveAllAnimes', () => {
    test('should export a receiveAllAnimes function', () => {
      expect(typeof receiveAllAnimes).toEqual('function');
    })

    test('should return an action with the type "RECEIVE_ALL_ANIMES"', () => {
      let action = receiveAllAnimes();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual(RECEIVE_ALL_ANIMES);
    })

    test('should take in an animes argument and set it as the animes property', () => {
      let animes = { 1: 'anime1', 2:'anime2' };
      let action = receiveAllAnimes(animes);
      expect(action.animes).toEqual(animes);
    })
  })

  describe('receiveAnime', () => {
    test('should export a receiveAnime function', () => {
      expect(typeof receiveAnime).toEqual('function');
    })

    test('should return an action with the type "RECEIVE_ANIME"', () => {
      let action = receiveAnime();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual(RECEIVE_ANIME);
    })

    test("should take an anime and set the anime to the action's anime key", () => {
      let anime = { title: 'K-ON!!'};
      let action = receiveAnime(anime);
      expect(action.anime).toEqual(anime);
    })
  })


})
