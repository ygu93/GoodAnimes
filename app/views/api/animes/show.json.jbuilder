json.id @anime.id
json.title @anime.title
json.synopsis @anime.synopsis
json.start_date @anime.start_date
json.end_date @anime.end_date
json.image @anime.image
json.score @anime.score
json.episodes @anime.episodes
json.media_type @anime.media_type
json.status @anime.status
json.libraries @anime.anime_libraries.select{|library| library.user_id == current_user.id}.map{|lib| lib.name}
json.reviews @anime.reviews do |review|
  json.extract! review, :id,
                        :user_id,
                        :anime_id,
                        :user_rating,
                        :user_start_date,
                        :user_end_date,
                        :body,
                        :updated_at,
                        :user
                        json.created_at review.created_at.to_date
                      end
