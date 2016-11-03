class Addmoreanimecolumns < ActiveRecord::Migration[5.0]
  def change
    add_column :animes, :type, :string
    add_column :animes, :status, :string
  end
end
