class Review < ApplicationRecord
  validates :user_id, :anime_id presence:true
  belongs_to :user
  belongs_to :anime
end
