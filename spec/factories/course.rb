
FactoryBot.define do
  factory :course do
    title { Faker::Lorem.word }
    description { Faker::Lorem.word }
    cost { Faker::Number.number(digits: 4) }
    course_type { Faker::Lorem.word }
    max_seats { Faker::Number.between(from: 0, to: 10) }
  end
end