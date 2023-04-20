class ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: @review, status: :created
        else
            render json: {error: "Review not created", status: :unprocessable_entity}
        end
    end

    private

    def review_params
        params.permit(:ratings, :comments, :recipe_id, :user_id)
    end
end
