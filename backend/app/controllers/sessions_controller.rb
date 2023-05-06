class SessionsController < ApplicationController
    # skip_before_action :authorize, only: [:create]

     def create
       user = User.find_by(username: session_params[:username])

       if user&.authenticate(session_params[:password])
         token = encode_token({ username: user.username })
         render json: { loggedin: true, user: user.slice(:id, :username, :admin), jwt: token }, status: :created
       else
         render json: { error: 'Invalid username or password' }, status: :unauthorized
       end
     end

     def destroy
        @current_user = nil
       session.delete(:jwt_token)
       render json: { message: 'Logged out successfully' }
     end

     private

     def session_params
       params.permit(:username, :password)
     end
   end