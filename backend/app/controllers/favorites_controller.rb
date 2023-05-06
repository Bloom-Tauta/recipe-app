class FavoritesController < ApplicationController
    # skip_before_action :authorized, only: [:index, :create, :show]

    # def create
    #     @favorite = Favorite.create(favorite_params)
    #     if @favorite.save
    #       render json: favorite, status: :created
    #     else
    #       render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
    #     end
    #   end

    def index
        @favorites = Favorite.all
        render json: @favorites
    end

    def show
        @favorite = find_favorite
        render json: @favorite
    end

    def create
        # @favorite = current_user.favorites.build(favorite_params)
        @favorite = Favorite.new(favorite_params)

        if !Favorite.exists?(favorite_params)
            if @favorite.save
            render json: @favorite, status: :created
            else
            render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
            end
        else
            head :no_content
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
end
