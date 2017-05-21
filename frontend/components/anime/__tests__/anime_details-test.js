jest.mock('../../review/review_index_container', () => {
  return function IndexContainer() {
    return { render: () => ( <div></div>)}
  }
})

jest.mock('../../user_anime/add_user_anime_container', () => {
  return function UserAnimeContainer() {
    return { render: () => ( <div></div>) }
  }
})

import React from 'react';
import { mount, shallow } from 'enzyme';
import AnimeDetailsContainer from '../anime_details_container';
import AnimeDetails from '../anime_details';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';
import AnimeMiddleware from '../../../middleware/anime_middleware';

const mockAnime = { id: 1,
  title:'Kimi no Na Wa',
  synopsis:'standard shinkai',
  start_date:'10-01-15',
  end_date:'10-02-15',
  image:'notrealimage.com/test',
  score:'9.3',
  episodes:1,
  media_type:'Movie',
  status:'done',
  libraries:['finished watching', 'favorites'],
  reviews:[{ id:1, user_rating:9, body:'Beautiful' }, { id:2, user_rating:10, body:'Absolutely Beautiful' }],
  currentUserReview:{ id:1, user_rating:9, body:'Beautiful' }
};


const testUser = { user_id: 1, username: 'SuzumiyaHaruhi' };
const testLibrary = { name:'Favorites', user_id: 1, id: 1 };
const middleware = [AnimeMiddleware];
const mockStore = configureMockStore(middleware);
const testStore = mockStore({ anime: mockAnime, session:{ currentUser: testUser }, animeLibrary: testLibrary  });

describe('anime details', () => {
  let animeDetails;
  let animeDetailsWrapper;

  beforeEach( () => {
    animeDetails = mount(<AnimeDetailsContainer store={testStore}/>);
    animeDetailsWrapper = animeDetails.find('AnimeDetails');
  });

  test('displays a header called information', () => {
    let header = animeDetailsWrapper.find('h4').filterWhere(n => n.parent().is('li'));
    expect(header.props().children).toBe('Information');
  });

  test('displays anime title', () => {
    let animeTitle = animeDetailsWrapper.find('h3');
    expect(animeTitle.props().children).toBe('Kimi no Na Wa');
  });

  test('displays the anime cover image', () => {
    let animeImage = animeDetailsWrapper.find('img').filterWhere(n => n.parent().is('.anime-info'));
    expect(animeImage.props().src).toBe('notrealimage.com/test');
  });

  test('displays the anime type', () => {
    let animeType = animeDetailsWrapper.find('li').filterWhere(n => n.children().length === 1 && n.children().props().children === 'Type:');
    expect(animeType.props().children).toContain('Movie');
  });

  test('displays the episode count for the anime', () => {
    let animeEpisodes = animeDetailsWrapper.find('li').filterWhere(n => n.children().length === 1 && n.children().props().children === 'Episodes:');
    expect(animeEpisodes.props().children).toContain(1);
  });

  test('displays the status of the anime', () => {
    let animeStatus = animeDetailsWrapper.find('li').filterWhere(n => n.children().length === 1 && n.children().props().children === 'Status:');
    expect(animeStatus.props().children).toContain('done');
  });

  test('displays the start date of the anime', () => {
    let animeStartDate = animeDetailsWrapper.find('li').filterWhere(n => n.children().length === 1 && n.children().props().children === 'Started On:');
    expect(animeStartDate.props().children).toContain('10-01-15');
  });

  test('displays the end date of the anime', () => {
    let animeEndDate = animeDetailsWrapper.find('li').filterWhere(n => n.children().length === 1 && n.children().props().children === 'Ended On:');
    expect(animeEndDate.props().children).toContain('10-02-15');
  });

  test('displays the score of the anime', () => {
    let animeScore = animeDetailsWrapper.find('li').filterWhere(n => n.children().length === 1 && n.children().props().children === 'Score:');
    expect(animeScore.props().children).toContain('9.3');
  });

  test('displays the title of the anime', () => {
    let animeTitle = animeDetailsWrapper.find('h3')
    expect(animeTitle.props().children).toBe('Kimi no Na Wa');
  });

  test('has a ReviewIndexContainer', () => {
    const reviewIndex = animeDetailsWrapper.find('IndexContainer');
    expect(reviewIndex.length).toBe(1);
  });

  test('renders a UserReviewDetails', () => {
    const reviewDetails = animeDetailsWrapper.find('UserReviewDetails');
    expect(reviewDetails.length).toBe(1);
  });

  test('does not render a review form upon render', () => {
    const reviewForm = animeDetailsWrapper.find('NewReviewFormContainer');
    expect(reviewForm.length).toBe(0);
  });

  test('has two modals', () => {
    const modals = animeDetailsWrapper.find('Modal');
    expect(modals.length).toBe(2);
  });

  test('renders dropdown on mouse enter', () => {
    const dropdownButton = animeDetailsWrapper.find('.dropdown-button');
    dropdownButton.simulate('mouseOver');
    const dropDownContainer = animeDetailsWrapper.find('UserAnimeContainer');
    expect(dropDownContainer.length).toBe(1);

  });
})
