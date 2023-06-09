class RecipesController < ApplicationController

    # before_action :authenticate_admin, only: [:destroy, :approve, :index, :create, :show, :update]
   # skip_before_action :authorized, only: [:index, :show]
    def index
        @recipes = Recipe.all
        render json: @recipes
    end

    def show
        @recipe= find_recipe
        render json: @recipe, serializer: CustomRecipeSerializer, include: ['reviews', 'reviews.user.usename']
    end

    def create
        @recipe=Recipe.create!(recipe_name: recipe_params[:recipe_name],
        recipe_category: recipe_params[:recipe_category],
        description: recipe_params[:description],
        recipe_thumb: recipe_params[:recipe_thumb],
        country_of_origin: recipe_params[:country_of_origin],
        number_of_people_served: recipe_params[:number_of_people_served],
        ingredients: recipe_params[:ingredients],
        instructions:recipe_params[:instructions],
        youtube_code: recipe_params[:youtube_code],
        user_id: current_user["id"])

        render json: @recipe , status: :created
    end
    def update
        @recipe = find_recipe
        @recipe.update!(recipe_params)
        render json: @recipe
    end
      # def destroy
      #   @recipe = find_recipe
      #   @recipe.destroy
      #   head :no_content
      # end
      # def approved
      #   @recipe = Recipe.find(params[:id])
      #   @recipe.update(admin: true)
      #   render json: { message: "Recipe approved!" }
      # end
      def approved
        @recipe = Recipe.find(params[:id])
        @recipe.update(approved: true)
        render json: { message: "Recipe approved!" }
      end

      def destroy
        @recipe = Recipe.find(params[:id])
        if current_user.admin==true
          @recipe.destroy
          render json: { message: "Recipe deleted!" }, status: :no_content
        else
          render json: { message: "Only admins can delete recipes." }, status: :unauthorized
        end
      end
    end


    private
    #strong params
    def find_recipe
        Recipe.find(params[:id])
    end
    def recipe_params
        params.permit(:recipe_name, :recipe_category,  :description, :recipe_thumb, :country_of_origin, :number_of_people_served, :ingredients, :instructions,  :approved,  :youtube_code)
    end


