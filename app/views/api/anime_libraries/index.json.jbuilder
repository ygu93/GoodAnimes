@anime_libraries.each do |library|
  json.set! library.id do
    json.id library.id
    json.name library.name
  end
  json.all_animes @all_animes.each do |user_anime|
    json.set! user_anime.id do
      json.id user_anime.id
      json.user_rating user_anime.user_rating
      json.user_start_date user_anime.user_start_date
      json.user_end_date user_anime.user_end_date
      json.title user_anime.anime.title
      json.image user_anime.anime.image
      json.score user_anime.anime.score
      json.type user_anime.anime.media_type
      json.bookshelves user_anime.anime.anime_libraries.select{|library| library.user_id == current_user.id}.map{|lib| lib.name}
    end
  end
end
