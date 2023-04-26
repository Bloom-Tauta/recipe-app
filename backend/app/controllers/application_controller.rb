class ApplicationController < ActionController::Base
    before_action :authorized

  def encode_token(payload)
    JWT.encode({id: user.id, username: user.username, admin: user.admin}, 'my_s3cr3t')
  end
  
  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end
  
  def auth_header
    request.headers['Authorization']
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end
#   def current_admin
#     if current_user&.admin == true
#      current_user
#     end
#  end

  # def authenticate_admin
  #   if current_user && current_user.admin

  #   else
  #     render json: {message: “You are not authorized to do this”}, status: :unauthorized
  #   end
  # end

  private
  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
