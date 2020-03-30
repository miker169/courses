class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /api/users
  def index
    @users = User.all
    json_response(@users)
  end

  def login
    @user = User.find_by_email(user_params[:email])
    json_response(@user)
  end
  # POST /api/users
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  # GET /api/users/:id
  def show
    json_response(@user)
  end

  # PUT /api/users/:id
  def update
    @user.update(user_params)
    head :no_content
  end

  # DELETE /api/users/:id
  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    # whitelist params
    params.permit(:name, :email)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
