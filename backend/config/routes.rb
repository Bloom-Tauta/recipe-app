Rails.application.routes.draw do
  # resources :users
  resources :recipes, only:[:index, :show, :update, :destroy, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # resources :users, only: [:create]
  resources :users, only: [:create, :index]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  root "users#index"

  resources :reviews
  get '/users', to: 'users#index'

end
