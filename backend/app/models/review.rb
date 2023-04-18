class Review < ApplicationRecord
    belongs_to :user
    belongs_to :recipe
    validates :comments, length: {maximum: 50}
end
