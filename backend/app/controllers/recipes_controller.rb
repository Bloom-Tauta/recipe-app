class RecipesController < ApplicationController



  # before_action :authenticate_admin, only: [:destroy, :approve, :index, :create, :show, :update]
  skip_before_action :authorized, only: [:index, :show]

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
    # def create
    #     @recipe=Recipe.create(recipe_image: recipe_params[:recipe_image],
    #                           recipe_name: recipe_params[:recipe_name],
    #                           description: recipe_params[:description],
    #                           country_of_origin: recipe_params[:country_of_origin],
    #                           number_of_people_served: recipe_params[:number_of_people_served],
    #                           ingredients: recipe_params[:ingredients],
    #                           instructions: recipe_params[:instructions],
    #                           date_time: recipe_params[:date_time],
    #                           user_id: current_user["id"]
    #     )
    #     render json: @recipe , status: :created
    # end
    # def create
    #         @recipe = current_user.recipes.create(recipe_params)
    #         if @recipe.persisted?
    #           render json: @recipe, status: :created
    #         else
    #           render json: { errors: @recipe.errors.full_messages }, status: :unprocessable_entity
    #         end
    #      end
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
      def destroy
        @recipe = Recipe.find(params[:id])
        if current_user.admin==true
          @recipe.destroy
          render json: { message: "Recipe deleted!" }, status: :no_content
        else
          render json: { message: "Only admins can delete recipes." }, status: :unauthorized
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
      # params.require(:recipe).permit(:recipe_name, :description, :country_of_origin, :number_of_people_served, ingredients: [], steps: [],:recipe_image )
      # params.require(:recipe).permit(:recipe_image, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :date_time, :approved)
        # params.require(:recipe).permit(:recipe_image, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :date_time, :approved)
      end
      
        # params.permit(:recipe_image, :recipe_name, :description, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :date_time, :approved)
    def render_not_found_response
        render json: { error: "Recipe not found" }, status: :not_found
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
  