class Api::CoursesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @courses = Course.all
    render json: @courses
  end

end
