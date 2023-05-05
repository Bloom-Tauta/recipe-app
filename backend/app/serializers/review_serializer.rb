class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :ratings, :comments
  end
