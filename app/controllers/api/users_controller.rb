class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :created
    else
      render json: { errors: @user.errors.full_messages }
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :updated
    else
      render json: { errors: @user.errors.full_messages }
    end
  end

  def show
    @user = User.find(params[:id])

    return not_found if @user.nil?

    render :show
  end

  private

  def user_params
    permitted = [:username, :email, :name, :password]

    params.require(:user).permit(permitted)
  end

  def user_exists?
    User.exists?(username: params[:user][:username])
  end
end
