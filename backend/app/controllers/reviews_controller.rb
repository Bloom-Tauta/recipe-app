class ReviewsController < ApplicationController
    skip_before_action :authorized
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    #GET /reviews/:id
    # def show
    #     @review = find_review
    #     render json: @review
    # end

    def index
        @review.all
        render json: reviews
    end

    def show
        review = find_review
        if review.present?
          render json: review, status: :ok
        else
          render json: { error: "Review not found" }, status: :not_found
        end
        
    end

    #POST /reviews

    def create
        review = Review.create(review_params)
        
        if review.save
          render json: review, status: :created
        else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
      end

    #DESTROY/reviews/:id
    def destroy
        @review = find_review
        @review.destroy
        head :no_content
    end



    private

    def find_review
        Review.find_by(id: params[:id])
    end

    def review_params
        params.permit(:ratings, :comments, :recipe_id, :user_id)
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

end
