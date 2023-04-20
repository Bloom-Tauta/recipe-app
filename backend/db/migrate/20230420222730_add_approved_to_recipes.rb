class AddApprovedToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :approved, :boolean, default: false
  end
end
