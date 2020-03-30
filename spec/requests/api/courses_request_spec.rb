require 'rails_helper'

RSpec.describe "Api::Courses", type: :request do

  let!(:courses) { create_list(:course, 10) }
  let(:course_id) { users.first.id }

  describe "GET /api/courses" do
    it "returns http success" do
      get "/api/courses"
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 courses"  do
      get "/api/courses"
      response.header['Content-Type'].should include 'application/json'
      expect(json.size).to eq(10)
    end
  end

  # describe "GET /create" do
  #
  #   it "returns http success" do
  #     get "/api/courses/create"
  #     expect(response).to have_http_status(:success)
  #   end
  # end
  #
  # describe "GET /show" do
  #   it "returns http success" do
  #     get "/api/courses/show"
  #     expect(response).to have_http_status(:success)
  #   end
  # end
  #
  # describe "GET /destroy" do
  #   it "returns http success" do
  #     get "/api/courses/destroy"
  #     expect(response).to have_http_status(:success)
  #   end
  # end

end
