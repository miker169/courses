class User < ApplicationRecord
  has_many :course_users
  validates_presence_of :name, :email
end
