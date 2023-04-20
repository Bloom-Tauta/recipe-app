class Review < ApplicationRecord
    belongs_to :user
    belongs_to :recipe

    # validates :comments, presence: true

end
