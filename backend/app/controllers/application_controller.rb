# class ApplicationController < ActionController::API
#   #protect_from_forgery with: :null_session
#     #before_action :authorize

#     def encode_token(payload)
#       # should store secret in env variable
#       JWT.encode(payload, 'my_s3cr3t')
#     end

#     def auth_header
#       # { Authorization: 'Bearer <token>' }
#       request.headers['Authorization']
#     end

#     def decoded_token
#       if auth_header
#         token = auth_header.split(' ')[1]
#         # header: { 'Authorization': 'Bearer <token>' }
#         begin
#           JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
#         rescue JWT::DecodeError
#           nil
#         end
#       end
#     end

#     def set_current_user
#       if decoded_token
#         username = decoded_token[0]['username']
#         if username
#           @current_user = User.find_by(username: username)
#         end
#       end
#     end

#     def logged_in?
#       !!@current_user
#     end

#     def logged
#       render json: { logged_in: logged_in?, current_user: @current_user }, include: :books
#     end

#     def authorized_user
#       render json: { message: 'Please log in ' }, status: :unauthorized unless logged_in? && @current_user.is_a?(User)
#     end

#     def authorize
#       set_current_user

#       if logged_in?
#         if @current_user.is_a?(User)
#           return true
#         end
#       end

#       render json: { message: 'Please log in as a user or an admin' }, status: :unauthorized
#     end

#   end

class ApplicationController < ActionController::Base
  # before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, 'my_s3cr3t')
  end

  def decoded_token
    return unless auth_header

    token = auth_header.split(' ')[1]
    begin
      JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
    rescue JWT::DecodeError
      nil
    end
  end

  def auth_header
    request.headers['Authorization']
  end

  def current_user
    return unless decoded_token

    user_id = decoded_token[0]['user_id']
    @user = User.find_by(id: user_id)
  end

  def logged_in?
    !!current_user
  end

  private

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end

# app/controllers/application_controller.rb

# class ApplicationController < ActionController::API
#   include JwtToken

#   before_action :authenticate_customer

#   private

#   def authenticate_customer
#     header = request.headers['Authorization']
#     if header && header.start_with?('Bearer ')
#       token = header.split(' ').last

#       begin
#         @decoded = JwtToken.decode(token)
#         @current_customer = Customer.find(@decoded[:customer_id])
#       rescue ActiveRecord::RecordNotFound => e
#         render json: { errors: e.message }, status: :unauthorized
#       rescue JWT::DecodeError => e
#         render json: { errors: e.message }, status: :unauthorized
#       end
#     else
#       render json: { errors: 'Authorization header missing or invalid' }, status: :unauthorized
#     end
#   end

#   def authenticate_seller
#     header = request.headers['Authorization']
#     if header && header.start_with?('Bearer ')
#       token = header.split(' ').last

#       begin
#         @decoded = JwtToken.decode(token)
#         @current_seller = Customer.find(@decoded[:seller_id])
#       rescue ActiveRecord::RecordNotFound => e
#         render json: { errors: e.message }, status: :unauthorized
#       rescue JWT::DecodeError => e
#         render json: { errors: e.message }, status: :unauthorized
#       end
#     else
#       render json: { errors: 'Authorization header missing or invalid' }, status: :unauthorized
#     end
#   end
# end
