class CustomeReviewSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :ratings, :comments

    belongs_to :user
  end