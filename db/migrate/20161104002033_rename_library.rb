class RenameLibrary < ActiveRecord::Migration[5.0]
  def change
    rename_column :user_animes, :library_id, :anime_library_id
  end
end
