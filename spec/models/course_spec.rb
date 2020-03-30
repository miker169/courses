require 'rails_helper'

RSpec.describe Course, type: :model do

  # associations

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:cost) }
  it { should validate_presence_of(:max_seats) }
  it { should validate_presence_of(:course_type) }
end
