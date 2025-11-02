class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :recipe_name, :recipe_category, :recipe_thumb, :description,
             :country_of_origin, :number_of_people_served, :ingredients,
             :instructions, :approved, :user_id, :youtube_code, :created_at, :updated_at

  # has_many :reviews
  # has_many :favorites
end
