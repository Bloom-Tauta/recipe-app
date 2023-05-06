class CustomRecipeSerializer < ActiveModel::Serializer
    attributes :id, :recipe_category, :youtube_code, :recipe_thumb, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :user_id, :created_at, :updated_at, :updated_at
    has_many :reviews
  end