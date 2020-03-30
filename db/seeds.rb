# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Course.create(title: 'Law', description: 'A Law Course', cost: 1000, course_type: 'Online', max_seats: 0)
Course.create(title: 'Accounting', description: 'An Accounting Course', cost: 500, course_type: 'Classroom', max_seats: 10)
Course.create(title: 'Management', description: 'A Management Course', cost: 200, course_type: 'Classroom', max_seats: 10)
Course.create(title: 'Close Up Magic', description: 'A Close-up Magic Course', cost: 200, course_type: 'Classroom', max_seats: 1)
