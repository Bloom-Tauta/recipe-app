class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :ratings, :comments, :user_id, :created_at, :updated_at
end
