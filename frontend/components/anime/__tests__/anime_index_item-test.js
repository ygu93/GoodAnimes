import React from 'react';
import { mount } from 'enzyme';
import AnimeIndexItem from '../anime_index_item.jsx';
import TestUtils from 'react-addons-test-utils';
import { hashHistory } from 'react-router';

describe('AnimeIndexItem', () => {
  let anime;
  let animeIndexItemWrapper;
  let push,
      replace,
      go,
      goBack,
      goForward,
      setRouteLeaveHook,
      createPath,
      createHref,
      isActive;

  beforeEach(() => {
    anime = { id: 1,
              title:'Kimi no Na Wa',
              synopsis:'standard shinkai',
              start_date:'10-01-15',
              end_date:'10-02-15',
              image:'notrealimage.com/test',
              score:'9.3',
              episodes:1,
              media_type:'movie',
              status:'done',
              libraries:['finished watching', 'favorites'],
              reviews:[{ id:1, user_rating:9, body:'Beautiful' }, { id:2, user_rating:10, body:'Absolutely Beautiful' }],
              currentUserReview:{ id:1, user_rating:9, body:'Beautiful' }
            }
    push = jest.fn();
    replace = jest.fn();
    go = jest.fn();
    goBack = jest.fn();
    goForward = jest.fn();
    setRouteLeaveHook = jest.fn();
    createPath = jest.fn();
    createHref = jest.fn();
    isActive = jest.fn();

    const context = { router: { params: { animeId: 1 }, push,
                                                        replace,
                                                        go,
                                                        goBack,
                                                        goForward,
                                                        setRouteLeaveHook,
                                                        createPath,
                                                        createHref,
                                                        isActive } };

    animeIndexItemWrapper = mount(<AnimeIndexItem anime={anime}/>, { context });
  });

  test(' should be an object', () => {
    expect(typeof animeIndexItemWrapper).toEqual('object');
  });

  test("should render an image of the anime's cover picture", () => {
    const img = animeIndexItemWrapper.find('img').props();
    expect(img.src).toBe('notrealimage.com/test');
  });

  test("should render a <p> tag with the anime's title", () => {
    const p = animeIndexItemWrapper.find('p').props();
    expect(p.children).toBe('Kimi no Na Wa');
  });

  test('clicking on the image takes the user to the anime details page', () => {
    const animeItem = animeIndexItemWrapper.find('li');
    animeItem.simulate('click', { preventDefault() { } });
    expect(push).toBeCalledWith(`/anime/${anime.id}`)
  })
});
