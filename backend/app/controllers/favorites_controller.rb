class FavoritesController < ApplicationController
    # before_action :authorized
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # def create
    #     @favorite = Favorite.create(favorite_params)
    #     if @favorite.save
    #       render json: favorite, status: :created
    #     else
    #       render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
    #     end
    #   end

    def index
        @favorites = Facvorite.all
        render json: @favorites
    end

    def show
        @favorite = find_favorite
        render json: @favorite
    end

    def create
        @favorite = current_user.favorites.build(favorite_params)

        if @favorite.save
          render json: { favorite: @favorite, user: current_user }, status: :created
        else
          render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
        end
      end
    def update
        @favorite = find_favorite
        if @favorite
            @favorite.update(favorite_params)
            render json: @favorite, status: :updated
        else
            render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @favorite = find_favorite
        @favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:user_id, :recipe_id)
    end

    def find_favorite
        favorite.find_by(id: params[:id])
    end

    def render_not_found_response
        render json: { error: "favorite not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
