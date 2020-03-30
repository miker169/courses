class Api::CourseUserController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:create, :index, :destroy]
  before_action :set_course, only: [:show]
  before_action :set_course_user, only: [:destroy]
  def index
    render json: @user.course_users
  end

  def create
    @user.course_users.create!(course_user_params)
    json_response(@user.course_users, :created)
  end

  def show
    render json: @course.course_users
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_course
    puts "FIRING"
    @course = Course.find(params[:course_id])
  end

  def course_user_params
    params.permit(:course_id)
  end

  def set_course_user
    @course_user = @user.course_users.find_by!(id: params[:id]) if @user
  end

  # DELETE /users/:user_id/course_user/:id
  def destroy
    @course_user.destroy
    head :no_content
  end
end
