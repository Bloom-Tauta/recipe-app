class Recipe < ApplicationRecord
  has_many :reviews
  belongs_to :user
  belongs_to :admin
  has_one_attached :recipe_image
end
