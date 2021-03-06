import values from 'lodash/values';

export const selectAllAnime = ({anime}) => values(anime);

export const selectAllAnimeLibrary = ({animeLibrary}) => values(animeLibrary);

export const selectAllReviews = ({review}) => values(review) ;
