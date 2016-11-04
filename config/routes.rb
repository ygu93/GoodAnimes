Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :animes, only: [:index, :show, :create]
    resources :anime_libraries, only: [:index, :create, :show, :update, :destroy]
    resources :user_animes, only: [:create, :show, :index, :update, :destroy]
  end
end
