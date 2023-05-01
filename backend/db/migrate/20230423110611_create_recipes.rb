class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :recipe_name
      t.string :recipe_category
      t.text :description
      t.string :recipe_thumb
      t.string :country_of_origin
      t.string :number_of_people_served
      t.text :ingredients
      t.text :instructions
      t.string :youtube_code
      t.integer :user_id
      t.boolean :is_local
      t.boolean :approved, default: false

      t.timestamps
    end
  end
end
