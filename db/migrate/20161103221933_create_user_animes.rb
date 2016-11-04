class CreateUserAnimes < ActiveRecord::Migration[5.0]
  def change
    create_table :user_animes do |t|
      t.integer :user_id, null:false
      t.integer :anime_id, null:false
      t.integer :library_id, null:false
      t.integer :user_rating
      t.date :user_start_date
      t.date :user_end_date
      t.timestamps
    end
    add_index :user_animes, :user_id
    add_index :user_animes, :library_id
    add_index :user_animes, :anime_id
  end
end
