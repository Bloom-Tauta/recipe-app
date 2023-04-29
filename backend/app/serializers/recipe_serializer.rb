class RecipeSerializer < ActiveModel::Serializer
    include JSONAPI::Serializer
  attributes :id, :recipe_image, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions,  :user_id
end
