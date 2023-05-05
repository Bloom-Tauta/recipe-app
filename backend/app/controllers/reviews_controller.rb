class ReviewsController < ApplicationController
    #GET /reviews

    def index
        @reviews = Review.all
        render json: @reviews
    end

    #GET /reviews/:id

    def show
        @review = find_review
        if @review.present?
          render json: @review, status: :created, serializer: CustomeReviewSerializer, include: ['user.username']
        else
          render json: { error: "Review not found" }, status: :not_found
        end

    end

    #POST /reviews

    def create
      @review = Review.create(review_params)

      if @review.save
        render json: @review, status: :created, serializer: CustomeReviewSerializer, include: ['user.username']
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
end
