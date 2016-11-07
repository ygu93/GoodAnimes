@anime_libraries.each do |library|
  json.set! 0 do
    json.name "All"
    json.animes @all_animes.each do |user_anime|
        json.id user_anime.id
        json.user_rating user_anime.user_rating
        json.user_start_date user_anime.user_start_date
        json.user_end_date user_anime.user_end_date
        json.title user_anime.anime.title
        json.image user_anime.anime.image
        json.score user_anime.anime.score
        json.type user_anime.anime.media_type
        json.anime_id user_anime.anime.id
        json.libraries user_anime.anime.anime_libraries.select{|library| library.user_id == current_user.id}.map{|lib| lib.name}
      end
  end
  json.set! library.id do
    json.id library.id
    json.name library.name
    json.animes library.user_animes do |user_anime|
      json.id user_anime.id
      json.user_rating user_anime.user_rating
      json.user_start_date user_anime.user_start_date
      json.user_end_date user_anime.user_end_date
      json.title user_anime.anime.title
      json.image user_anime.anime.image
      json.score user_anime.anime.score
      json.type user_anime.anime.media_type
      json.anime_id user_anime.anime_id
      json.libraries user_anime.anime.anime_libraries.select{|library| library.user_id == current_user.id}.map{|lib| lib.name}
    end
  end

end
