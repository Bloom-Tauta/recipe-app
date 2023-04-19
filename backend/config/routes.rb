Rails.application.routes.draw do
  resources :users, only: [:create, :index]
  post "/login", to: "users#login"
  delete "/logout", to: "users#logout"
  root "users#index"

end
