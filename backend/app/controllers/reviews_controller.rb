class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        reviews=Review.all 
        render json: reviews, status:200

    end
    def show
        review=find_review
        render json: review
    end
    def create
        review=Review.create!(reviews_params)
        render json: review, status: :created

    end
    private 
    # strong params
    def find_review
        Review.find(params[:id])
    end
    def reviews_params
        params.permit(:ratings,:comments,:recipe_id,:user_id)

    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
      end
end
