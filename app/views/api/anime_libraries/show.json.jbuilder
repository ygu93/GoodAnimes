
  json.id @anime_library.id
  json.name @anime_library.name
  json.animes @anime_library.user_animes do |user_anime|
    json.id user_anime.id
    json.user_rating user_anime.user_rating
    json.user_start_date user_anime.user_start_date
    json.user_end_date user_anime.user_end_date
    json.title user_anime.anime.title
    json.image user_anime.anime.image
    json.score user_anime.anime.score
    json.type user_anime.anime.media_type
    json.anime_id user_anime.anime_id
  end
