class UserSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :username, :email, :password_digest, :profile_pic, :image_url
end
