class RenameAnimeColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :animes, :type, :media_type
  end
end
