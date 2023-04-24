Rails.application.routes.draw do
  resources :favorites, only: [:create]
  
  resources :users, only: [:create, :index]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  # resources :recipes, only:[:index,  :show, :update, :destroy, :create]
  # put "/approved", to: "recipes#approved"
  resources :recipes, only: [:index, :show, :update, :destroy, :create] do
    put "/approved", to: "recipes#approved"
  end
 
  resources :reviews, only: [:create, :index, :destroy, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "users#index"

end
