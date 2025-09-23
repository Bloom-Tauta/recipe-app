class Recipe < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :users, through: :favorites
  has_many :reviews, dependent: :destroy
  # belongs_to :admin
  has_one_attached :recipe_image

  def image_url
    Rails.application.routes.url_helpers.url_for(recipe_image) if recipe_image.attached?
  end
end
