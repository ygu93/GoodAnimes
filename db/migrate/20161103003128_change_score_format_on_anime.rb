class ChangeScoreFormatOnAnime < ActiveRecord::Migration[5.0]
  def change
    change_column :animes, :score, :float
  end
end
