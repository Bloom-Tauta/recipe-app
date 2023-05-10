class UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create, :login]
  before_action :current_user



  def index
    users= User.all
    render json: users
  end

  def update
    user = User.find(params[:id])
    user.assign_attributes(user_params)
    if user.save
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  

  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
      from = "leah.wanjiku@student.moringaschool.com"
      subject = "New User Account"
      content = "Thank you for registering with us #{user.username}. Your account has been created successfully"
      # EmailService.call(from: @from, to: @user.email, subject: @subject, content: @content)
      render json: user, status: :created
  end

    # def login
    #   user = User.find_by(username: user_params[:username])
    #   if user && user.authenticate(user_params[:password])
    #     token = JWT.encode({ username: user.username }, 'my-secret-key', 'HS256')

    #     cookies.signed[:jwt] = { value: token, httponly: true, secure: false }

    #     render json: user, status: :ok
    #   else
    #     render json: { error: 'Invalid username or password' }, status: :unauthorized
    #   end
    # end

    # def logout
    #   cookies.delete(:jwt, httponly: true)
    #   render json: { message: 'Logged out successfully' }
    # end

    def me
      render json: @current_user
    end

    private

    def user_params
      params.permit(:username, :password, :email, :admin, :favourites)
    end
end
