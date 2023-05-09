Rails.application.routes.draw do
  resources :favorites
  resources :users
  post "/login", to: "sessions#create"
  get "/me", to: "users#me"
  delete "/logout", to: "sessions#logout"
  patch '/users/:id', to: 'users#update'
  # resources :recipes, only:[:index,  :show, :update, :destroy, :create]
  # put "/approved", to: "recipes#approved"

  resources :recipes, only: [:index, :show, :update, :destroy, :create] do
    put "/approved", to: "recipes#approved"
  end

  resources :reviews, only: [:create, :index, :destroy, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "users#index"

end
