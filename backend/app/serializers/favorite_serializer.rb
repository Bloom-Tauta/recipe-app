class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id, :created_at, :updated_at
end
