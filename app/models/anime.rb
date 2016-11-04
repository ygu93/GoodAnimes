class Anime < ApplicationRecord
  validates :title, :synopsis, :start_date, :end_date, :image, :score, :episodes, :media_type, :status, presence:true
  has_many :user_animes
  has_many :users, through: :user_animes
  has_many :anime_libraries, through: :user_animes
end
