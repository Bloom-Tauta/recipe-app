class Review < ApplicationRecord
    belong_to :user
    belongs_to :recipe

    # validates :comments, presence: true, uniqueness: true, length: {min: 15}

end
