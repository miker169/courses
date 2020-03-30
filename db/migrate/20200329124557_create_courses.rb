class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :description
      t.integer :cost
      t.integer :max_seats
      t.string :course_type

      t.timestamps
    end
  end
end
