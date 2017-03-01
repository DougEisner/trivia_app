Rails.application.routes.draw do

  get 'questions/index'

  # root 'home#index'

  mount_devise_token_auth_for 'User', at: 'auth'
  # root 'application#home'
end
