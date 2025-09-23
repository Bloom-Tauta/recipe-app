class User < ApplicationRecord
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    has_many :reviews
    has_many :favorites
    has_many :recipes
    has_many :favorite_recipes, through: :favorites, source: :recipe

    has_secure_password

    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
    validates :username, presence: true, uniqueness: { case_sensitive: false }
    validates :password, length: { in: 6..20 }
end
