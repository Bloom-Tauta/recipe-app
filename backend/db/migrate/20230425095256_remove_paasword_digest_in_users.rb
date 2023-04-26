class RemovePaaswordDigestInUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :paasword_digest
  end
end
