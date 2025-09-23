class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :thumb, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :approved, :user_id, :youtube_url, :created_at, :updated_at

  has_many :reviews
  has_many :users, through: :favorites
end
