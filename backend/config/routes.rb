Rails.application.routes.draw do
  resources :reviews, only:[:create, :show, :index]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "users#index"
end
