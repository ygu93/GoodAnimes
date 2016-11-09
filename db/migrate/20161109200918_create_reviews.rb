class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :anime_id, null:false
      t.integer :user_rating
      t.date :user_start_date
      t.date :user_end_date
      t.text :body
      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :anime_id
  end
end
