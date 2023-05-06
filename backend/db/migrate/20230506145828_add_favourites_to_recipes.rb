class AddFavouritesToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :favourites, :boolean, default: false
  end
end
