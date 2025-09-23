class RemoveFavouritesFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :favourites, :boolean
  end
end
