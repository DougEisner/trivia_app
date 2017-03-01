Rails.application.routes.draw do
  get 'questions/index'

  root 'application#home'
end
