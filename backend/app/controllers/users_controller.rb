class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :login]

  def index 
    @users= User.all 
    render json: @users.map { |user| UserSerializer.new(user).serializable_hash[:data][:attributes] }
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      token = encode_token({ user_id: @user.id, admin: @user.admin})
      @from = "leah.wanjiku@student.moringaschool.com"
      @subject = "New User Account"
      @content = "Thank you for registering with us #{@user.username}. Your account has been created successfully"
      EmailService.call(from: @from, to: @user.email, subject: @subject, content: @content)
      render json: { user: @user.as_json(except: [:created_at, :updated_at]), token: token }, status: :created
    else
      render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # def destroy
  #   @user = user.find_by(id: params[:id])
  #   if @users.admin?
  #     @users.destroy
  #     render json: { message: "users deleted!" }, status: :no_content
  #   else
  #     render json: { message: "Only admins can delete users." }, status: :unauthorized
  #   end
  # end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    head :no_content
  end
  
    def login
      @user = User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
        token = encode_token({ user_id: @user.id, admin: @user.admin})
        render json: { user: @user.as_json(except: [:created_at, :updated_at]), token: token, authorized: true  }
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end

    def logout
      session.delete(:user_id)
      render json: { message: 'Logged out successfully' }
    end
    
      private

  def user_params
    params.permit(:username, :password, :email, :admin, :profile_pic)
  end
  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
  def logged_in?
    !!current_user
  end
end
