FactoryBot.define do
  factory :user do
    name { Faker::Lorem.word }
    email { Faker::Lorem.word }
  end
end
