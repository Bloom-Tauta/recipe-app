Rails.application.routes.draw do
  resources :users
  resources :recipes, only:[:index, :show, :update, :destroy, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "users#index"
end
