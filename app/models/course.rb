class Course < ApplicationRecord
  # associations
  has_many :course_users

  validates_presence_of :title, :description, :cost, :max_seats, :course_type
end
