Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://recipe-app-eight-chi.vercel.app'
    resource '*',
             headers: :any,
             methods: %i[get post put patch delete options head]
  end
end
