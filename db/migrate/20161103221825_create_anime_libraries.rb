class CreateAnimeLibraries < ActiveRecord::Migration[5.0]
  def change
    create_table :anime_libraries do |t|
      t.string :name, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
  end
end
