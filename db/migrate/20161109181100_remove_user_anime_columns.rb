class RemoveUserAnimeColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :user_animes, :user_end_date
    remove_column :user_animes, :user_start_date
    remove_column :user_animes, :user_rating
  end
end
