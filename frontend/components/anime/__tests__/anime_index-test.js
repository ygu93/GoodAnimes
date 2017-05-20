import React from 'react';
import { mount, shallow } from 'enzyme';
import AnimeIndexContainer from '../anime_index_container';
import AnimeIndex from '../anime_index';
import AnimeIndexItem from '../anime_index_item';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';
import AnimeMiddleware from '../../../middleware/anime_middleware';

const mockAnimes = [
  { id: 1,
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
  },
  { id: 2,
    title:'Ghost in the Shell: Standalone Complex',
    synopsis:'laughing man',
    start_date:'10-01-16',
    end_date:'10-02-16',
    image:'notrealimage.com/test2',
    score:'8.7',
    episodes:26,
    media_type:'TV',
    status:'done',
    libraries:['finished watching', 'favorites'],
    reviews:[{ id:3, user_rating:8, body:'Thrilling' }, { id:4, user_rating:9, body:'Better than the live action' }],
    currentUserReview:{ id:3, user_rating:8, body:'Thrilling' }
  }
]

const middleware = [AnimeMiddleware];
const mockStore = configureMockStore(middleware);
const testStore = mockStore({ anime: mockAnimes });

describe('anime index', () => {
  let animeIndexWrapper;

  beforeEach(() => {
    animeIndexWrapper = shallow(<AnimeIndexContainer store={testStore} params={mockAnimes}/>).shallow();
  });

  test('renders AnimeIndexItem for each anime, passing in each anime as a prop called anime', () => {
    const animeIndexItems = animeIndexWrapper.find(AnimeIndexItem).nodes;
    expect(animeIndexItems.length).toBe(2);

    for(let i = 0; i < animeIndexItems.length; i++){
      expect(animeIndexItems[i].props.anime).toBe(mockAnimes[i]);
    }
  })

  test('contains a header to say check out top animes', () => {
    const header = animeIndexWrapper.find('h2');
    expect(header.props().children).toEqual('Check out some of the top Animes');
  })

})
