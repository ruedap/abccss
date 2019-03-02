Rails.application.routes.draw do
  unless Rails.env.production?
    get 'styleguide' => 'styleguide#index'
  end
end
