Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show]
    resources :notebooks, only: [:index, :create, :update, :show, :destroy]
    resources :notes, only: [:index, :create, :update, :show, :destroy]
  end

  get "*path", to: "static_pages#index"
end
