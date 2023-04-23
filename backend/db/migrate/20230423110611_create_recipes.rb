class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.text :description
      t.string :country_of_origin
      t.string :number_of_people_served
      t.text :ingredients
      t.text :instructions
      t.datetime :date_time
      t.integer :user_id
      t.integer :admin_id
      t.boolean :approved, default: false

      t.timestamps
    end
  end
end
