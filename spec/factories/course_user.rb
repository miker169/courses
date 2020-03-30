FactoryBot.define do
  factory :course_user do
    user
    association :course
  end
end
