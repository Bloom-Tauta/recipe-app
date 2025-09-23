class FixAdminDefaultOnUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :admin, false
    change_column_null :users, :admin, false
  end
end
