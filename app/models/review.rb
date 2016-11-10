class Review < ApplicationRecord
  validates :user_id, :anime_id, presence:true
  belongs_to :user
  belongs_to :anime
  validate :has_one_field

  def has_one_field
    if user_start_date.blank? && user_end_date.blank? && user_rating.blank? && body.blank?
      errors[:field] = "Can't be Blank"
    end
  end
end
