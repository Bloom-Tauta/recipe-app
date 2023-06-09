class User < ApplicationRecord
    has_many :reviews
    # has_many :recipes
    # has_many :favorites
    has_many :favorites
    has_many :recipes, through: :favorite

    has_secure_password
    # validates_format_of :email, with: /@/
    validates :email, presence: true
    # , uniqueness:  true
    validates :username, uniqueness: { case_sensitive: false }
    # validates :password, length: { in: 6..10 }

end
