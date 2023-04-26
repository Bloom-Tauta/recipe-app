class User < ApplicationRecord
  has_one_attached :profile_pic
  has_many :reviews
  has_many :recipes

    has_secure_password
    validates_format_of :email, with: /@/
    validates :email, presence: true, uniqueness:  true
    validates :username, uniqueness: { case_sensitive: false }
    validates :password, length: { in: 6..10 }
    def image_url
      Rails.application.routes.url_helpers.url_for(profile_pic) if profile_pic.attached?
    end
   
end
