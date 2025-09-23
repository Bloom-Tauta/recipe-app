class RecipesController < ApplicationController
  # before_action :authenticate_admin, only: [:destroy, :approve, :index, :create, :show, :update]
  # skip_before_action :authorized, only: [:index, :show]
  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = find_recipe
    render json: recipe, include: ['reviews', 'reviews.user.usename']
  end

  def create
    recipe = Recipe.create(recipe_params)
    if recipe.valid?
      render json: recipe, status: :created
    else
      render json: { error: [error.message] }, status: :unprocessable_entity
    end
  end

  def update
    recipe = find_recipe
    recipe.update!(params)
    render json: recipe
  end

  # def destroy
  #   recipe = find_recipe
  #   recipe.destroy
  #   head :no_content
  # end
  # def approved
  #   recipe = Recipe.find(params[:id])
  #   recipe.update(admin: true)
  #   render json: { message: "Recipe approved!" }
  # end
  def approved
    recipe = Recipe.find(params[:id])
    recipe.update(approved: true)
    render json: { message: 'Recipe approved!' }
  end

  def destroy
    recipe = Recipe.find(params[:id])
    if current_user.admin == true
      recipe.destroy
      render json: { message: 'Recipe deleted!' }, status: :no_content
    else
      render json: { message: 'Only admins can delete recipes.' }, status: :unauthorized
    end
  end
end

private

# strong params
def find_recipe
  Recipe.find(params[:id])
end

def recipe_params
  params.permit(:name, :category, :description, :thumb, :country_of_origin, :number_of_people_served, :ingredients, :instructions, :approved, :youtube_url, :user_id)
end
