json.id @user_anime.anime.id
json.user_anime_id @user_anime.id
json.title @user_anime.anime.title
json.image @user_anime.anime.image
json.score @user_anime.anime.score
json.type @user_anime.anime.media_type
json.anime_id @user_anime.anime.id
json.libraries @user_anime.anime.anime_libraries.select{|library| library.user_id == current_user.id}.map{|lib| lib.name}
json.currentUserReview @user_anime.anime.reviews.select {|review| review.user_id == current_user.id}[0]
