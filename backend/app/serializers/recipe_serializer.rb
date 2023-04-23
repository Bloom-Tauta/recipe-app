class RecipeSerializer
  include JSONAPI::Serializer
  attributes :id, :recipe_image, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :date_time, :user_id, :admin_id
end
