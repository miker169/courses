require 'rails_helper'

RSpec.describe "CourseUsers", type: :request do

  #Initialize the test data
  let!(:user) { create(:user) }
  let!(:course) { create(:course)}
  let!(:course_users) { create_list(:course_user, 1, :user, :course) }
  let(:course_id) { course.id }
  let(:user_id) { user.id }
  let(:id) { course_users.first.id }


  describe 'GET /users/:user_id/course_users' do
    before { get "/users/#{user_id}/course_users" }

    context 'when user exists' do
      # it 'returns status code 200' do
      #   expect(response).to have_http_status(200)
      # end
      #
      # it 'returns all user courses' do
      #   expect(json.size).to eq(20)
      # end
    end
  end

end
