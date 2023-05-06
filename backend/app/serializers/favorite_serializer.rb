class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id
  belongs_to :user
  belongs_to :recipe
end
