```js
{
  currentUser: {
    id: 1,
    username: "kappa123"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    animeLibraries: {errors: ["name can't be blank"]},
    reviews: {errors: ["body can't be blank"]}
  },
  animes: {
    1: {
      title: "Shirobako",
      episodes: 24,
      score: 8.49,
      startDate: 2014-10-09,
      endDate: 2015-03-26,
      synopsis: "Shirobako begins with five members of ....",
      image: "https://myanimelist.cdn-dena.com/images/anime/6/68021.jpg"

    }
  },
  UserAnimes: {
    1: {
      animeId: 1,
      userId: 1,
      userRating: 10,
      libraryId: 1,
      userStartDate: 2015-6-18,
      userEndDate: 2015-6-30
    }
  }

  AnimeLibraries: {
    1: {
      userId: 1,
      name: "Watched"
    }
  }

  Reviews: {
    1: {
      userId: 1,
      animeId: 1,
      body: "I liked this show"
    }
  }

}
```
