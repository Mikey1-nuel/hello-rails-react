Rails.application.routes.draw do
  namespace :api do
    resources :messages, only: [:index]
  end
  # Defines the root path route ("/")
  root "homes#index"
end
