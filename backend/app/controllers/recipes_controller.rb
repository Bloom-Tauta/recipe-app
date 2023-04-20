class RecipesController < ApplicationController
  skip_before_action :verify_authenticity_token
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        @recipes=Recipe.all
        render json: @recipes.map { |recipe| RecipeSerializer.new(recipe).serializable_hash[:data][:attributes] }
    end
    def show
        @recipe= find_recipe
      render json: RecipeSerializer.new(@recipe).serializable_hash[:data][:attributes]
    end
    def create
        @recipe=Recipe.create!(recipe_params)
        render json: @recipe , status: :created
    end
    def update
        @recipe = find_recipe
        @recipe.update!(recipe_params)
        render json: @recipe
      end
      def destroy
        @recipe = find_recipe
        @recipe.destroy
        head :no_content
      end
    private
    #strong params
    def find_recipe
        Recipe.find(params[:id])
    end
    def recipe_params
        params.permit(:recipe_image, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :date_time, :user_id, :admin_id)
    end
    def render_not_found_response
        render json: { error: "Recipe not found" }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
end
