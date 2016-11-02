class CreateAnimes < ActiveRecord::Migration[5.0]
  def change
    create_table :animes do |t|
      t.string :title, null:false
      t.text :synopsis , null:false
      t.date :start_date, null:false
      t.date :end_date, null:false
      t.string :image, null:false
      t.integer :score, null:false
      t.integer :episodes, null:false
      t.timestamps
    end
  end
end
