Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :users
  end

  get "*path", to: "static_pages#index"
end
