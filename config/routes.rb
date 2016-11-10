Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :animes, only: [:index, :show, :create]
    resources :anime_libraries, except: [:new]
    resources :user_animes, except: [:new]
    resources :reviews, except: [:new, :index]
  end
end
