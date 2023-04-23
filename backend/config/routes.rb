Rails.application.routes.draw do
  resources :favorites
  resources :users, only: [:create, :index]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  resources :recipes, only:[:index,  :show, :update, :destroy, :create]
  patch "/approved", to: "recipes#approved"
  # namespace :admin do
  #   resources :recipes do
  #     put :approved, on: :member
  #   end
  # end
  resources :reviews, only: [:create, :index, :destroy, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "users#index"

end
