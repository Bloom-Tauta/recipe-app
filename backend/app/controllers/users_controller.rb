class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :login]
  # before_action :authorized, only: [:create, :destroy]

  def index
    @users= User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      token = encode_token({ user_id: @user.id })
      @from = "leah.wanjiku@student.moringaschool.com"
      @subject = "New User Account"
      @content = "Thank you for registering with us #{@user.username}. Your account has been created successfully"
      # EmailService.call(from: @from, to: @user.email, subject: @subject, content: @content)
      render json: { user: @user.as_json(except: [:created_at, :updated_at]), token: token }, status: :created
    else
      render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

    def login
      @user = User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
        token = encode_token({ user_id: @user.id })
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
    params.permit(:username, :password, :email, :admin)
  end
  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
  def logged_in?
    !!current_user
  end
end
