import AnimeReducer from '../anime_reducer';

const anime1 = { id: 1,
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
const anime2 = { id: 2,
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

const userAnime1 = { libraries: ["watching", "favorites", "drama"]};

describe('AnimeReducer', () => {
  test('exports a function', () => {
    expect(typeof AnimeReducer).toEqual('function')
  });

  test('should initialize the state shape as an empty object', () => {
    expect(AnimeReducer(undefined, {})).toEqual({})
  });

  test('should return the previous state if an action is unmatched', () => {
    const oldState = { 1: 'oldState'};
    const newState = AnimeReducer(oldState, { type: 'faker type'});
    expect(newState).toEqual(oldState);
  })

  describe('handling the RECEIVE_ALL_ANIMES action', ()=>{
    let animes;
    let action;

    beforeEach(() => {
      animes = { 1: anime1, 2: anime2 },
      action = { type:'RECEIVE_ALL_ANIMES', animes: animes }
    })

    test('replace the old state with the animes object', ()=>{
      let newState = AnimeReducer(undefined, action);
      expect(newState).toEqual(animes);
    })

    test('should not modify the old state', ()=>{
      let oldState = {};
      AnimeReducer(oldState, action);
      expect(oldState).toEqual({});
    })
  })

  describe('handling the RECEIVE_ANIME action', ()=>{
    let action;

    beforeEach(() => {
      action = { type:'RECEIVE_ANIME', anime:anime1 };
    })

    test('replace oldState with anime object', ()=>{
      let newState = AnimeReducer(undefined, action);
      expect(newState).toEqual(anime1);
    })
  })

  describe('handling the REMOVE_REVIEW action', ()=> {
    let action;
    let review;

    beforeEach(() => {
      review = { id:1, user_rating:9, body:'Beautiful' };
      action = { type: 'REMOVE_REVIEW', review: review };
    })

    test("should delete the specified review from the anime's review array", ()=>{
      let newState = AnimeReducer(anime1, action);
      expect(newState.reviews).toEqual([undefined,{ id:2, user_rating:10, body:'Absolutely Beautiful' } ]);
    })

    test("should set the currentUserReview to null", ()=>{
      let newState = AnimeReducer(anime1, action);
      expect(newState.currentUserReview).toBeNull();
    })
  })

  describe('handling the RECEIVE_REVIEW action', () => {
    let action;
    let newReview;
    let updatedReview
    let action2

    beforeEach(()=>{
      newReview = { id:5, user_rating:10, body:'Loved it' };
      action = { type: 'RECEIVE_REVIEW', review: newReview };
      updatedReview = { id:1, user_rating:9, body:'Beautiful' };
      action2 = { type: 'RECEIVE_REVIEW', review: updatedReview };
    })

    test("sets currentUserReview to the received review", () => {
      let newState = AnimeReducer(anime1, action);
      expect(newState.currentUserReview).toEqual(newReview);
    })

    test("adds the review the anime's review array if its a new review", () => {
      let newState = AnimeReducer(anime1, action);
      expect(newState.reviews.length).toEqual(3);
    })

    test("updates the review if it already exists", ()=>{
      let newState = AnimeReducer(anime1, action2);
      expect(newState.reviews[0]).toEqual(updatedReview);
    })
  })

  describe('handling the RECEIVE_USER_ANIME action', ()=>{
    let action;
    let userAnime;

    beforeEach(()=>{
      userAnime = userAnime1;
      action = { type: 'RECEIVE_USER_ANIME', userAnime: userAnime };
    })

    test("sets the anime's libraries to the user anime's libraries", () => {
      let newState = AnimeReducer(anime1, action);
      expect(newState.libraries).toEqual(userAnime.libraries)
    })
  })

  describe('handling the REMOVE_USER_ANIME action', ()=> {
    let action;
    let userAnime;

    beforeEach(()=>{
      userAnime = userAnime1;
      action = { type: 'REMOVE_USER_ANIME', userAnime: userAnime };
    })

    test("replaces the anime's libraries to the user anime's libraries", ()=>{
      let newState = AnimeReducer(anime1, action);
      expect(newState.libraries).toEqual(userAnime.libraries);
    })
  })

});
