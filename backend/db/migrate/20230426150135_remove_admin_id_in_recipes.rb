class RemoveAdminIdInRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipes, :admin_id
  end
end
