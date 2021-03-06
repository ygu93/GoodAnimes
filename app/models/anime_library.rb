class AnimeLibrary < ApplicationRecord
  validates :name, :user_id, presence:true
  belongs_to :user
  has_many :user_animes, dependent: :destroy
  has_many :animes, through: :user_animes
end
