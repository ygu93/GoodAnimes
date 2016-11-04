class UserAnime < ApplicationRecord
  belongs_to :user
  belongs_to :anime_library
  belongs_to :anime
end
