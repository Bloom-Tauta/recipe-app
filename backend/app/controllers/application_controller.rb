# class ApplicationController < ActionController::API
#   wrap_parameters format: []
#   include ActionController::Cookies

#   rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
#   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

#   before_action :authorized

#   def authorized
#     token = cookies.signed[:jwt]
#     if token.present?
#       begin
#         payload = JWT.decode(token, 'my-secret-key', true, { algorithm: 'HS256'}).first
#         @user = User.find_by(username: payload['username'])
#       rescue JWT::DecodeError => e
#         head :unauthorized
#       end
#     end
#     unless @user
#       render json: { message: 'Please log in' }, status: :unauthorized
#     end
#   end
# end

class ApplicationController < ActionController::API
  #protect_from_forgery with: :null_session
    #before_action :authorize

    def encode_token(payload)
      # should store secret in env variable
      JWT.encode(payload, 'my_s3cr3t')
    end

    def auth_header
      # { Authorization: 'Bearer <token>' }
      request.headers['Authorization']
    end

    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        # header: { 'Authorization': 'Bearer <token>' }
        begin
          JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end

    def set_current_user
      if decoded_token
        username = decoded_token[0]['username']
        if username
          @current_user = User.find_by(username: username)
        end
      end
    end


    def logged_in?
      !!@current_user
    end

    def logged
      render json: { logged_in: logged_in?, current_user: @current_user }, include: :books
    end



    def authorized_user
      render json: { message: 'Please log in ' }, status: :unauthorized unless logged_in? && @current_user.is_a?(User)
    end



    def authorize
      set_current_user

      if logged_in?
        if @current_user.is_a?(User)
          return true
        end
      end

      render json: { message: 'Please log in as a user or an admin' }, status: :unauthorized
    end

  end