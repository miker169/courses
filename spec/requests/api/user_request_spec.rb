require 'rails_helper'

RSpec.describe 'Users API', type: :request do
# initialize test data
  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }
  let(:email) { users.first.email}


  # Test suite for GET /api/users/:email
  describe 'POST /api/users' do
    let(:valid_attributes) { { email: email } }
    before { post "/api/users/login", params: valid_attributes }

    context 'when the user exists' do
      it 'returns the user' do
        expect(json).not_to be_empty
        puts json
        expect(json['email']).to eq(email)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  # Test suite for POST /api/users
  describe 'POST /api/users' do
    # valid payload
    let(:valid_attributes) { { name: 'Mike Rayner', email: 'miker169@hotmail.co.uk' } }

    context 'when the request is valid' do
      before { post '/api/users', params: valid_attributes }

      it 'creates a user' do
        expect(json['name']).to eq('Mike Rayner')
        expect(json['email']).to eq('miker169@hotmail.co.uk')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/users', params: { name: 'Mike Rayner' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match("{\"message\":\"Validation failed: Email can't be blank\"}")
      end
    end
  end

end
