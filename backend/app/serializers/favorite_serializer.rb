class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :recipe
  # attributes :id, :user_id, :recipe_id
  # belongs_to :user
  # belongs_to :recipe
end
