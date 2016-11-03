class Anime < ApplicationRecord
  validates :title, :synopsis, :start_date, :end_date, :image, :score, :episodes, :media_type, :status, presence:true

end
