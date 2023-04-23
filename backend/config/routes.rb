Rails.application.routes.draw do
  resources :users, only: [:create, :index]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  resources :recipes, only:[:index, :show, :update, :destroy, :create]
  resources :reviews, only: [:create, :index, :destroy, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "users#index"

end
