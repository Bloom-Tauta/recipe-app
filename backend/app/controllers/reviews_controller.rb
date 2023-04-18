class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
        review=Review.create!(reviews_params)
        render json: review, status: :created

    end
    private 
    # strong params
    def reviews_params
        params.permit(:ratings,:comments,:recipe_id,:user_id)

    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
