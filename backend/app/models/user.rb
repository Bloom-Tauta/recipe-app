class User < ApplicationRecord
    has_secure_password
validates_format_of :email, with: /@/
validates :email, presence: true, uniqueness:  true
validates :username, uniqueness: { case_sensitive: false }
validates :password, length: { in: 6..10 }
   
end
