Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    resources :courses do
      match 'course_users' => 'course_user#show', :via => :get
    end
    resources :users do
      resources :course_user
    end
    match 'users/login' => 'users#login', :via => :post
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
