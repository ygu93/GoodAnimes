import { fetchAnime, fetchAllAnime } from '../anime_api_util';

describe('anime api util', () => {
  let mockSuccessCallback;
  let mockErrorCallback;

  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    mockSuccessCallback = jest.fn(() => 'mock success');
    mockErrorCallback = jest.fn(() => 'mock error');
  })

  afterEach(() => {
    global.$.ajax.mockClear();
  })

  test('fetchAllAnime makes an ajax request that gets all animes', () => {
    fetchAllAnime(mockSuccessCallback);
    expect($.ajax).toBeCalled();
  })

  test('fetchAllAnime triggers success callback upon 200', () => {
    fetchAllAnime(mockSuccessCallback);

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    ajaxCallArg.success('dummy success');
    expect(mockSuccessCallback).toBeCalledWith('dummy success');
  })

  test('fetchAnime makes an ajax request to get an anime', () => {
    fetchAnime(mockSuccessCallback);
    expect($.ajax).toBeCalled();
  })

  test('fetchAnime triggers success callback on success', () => {
    fetchAnime(1, mockSuccessCallback);

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    ajaxCallArg.success('fake success');
    expect(mockSuccessCallback).toBeCalledWith('fake success');
  })

  test('fetchAnime calls error callback on error', () => {
    fetchAnime(1, mockSuccessCallback, mockErrorCallback);

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    ajaxCallArg.error('fake error SAD!');
    expect(mockErrorCallback).toBeCalledWith('fake error SAD!')
  })
})
