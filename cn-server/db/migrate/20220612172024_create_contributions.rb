class CreateContributions < ActiveRecord::Migration[7.0]
  def change
    create_table :contributions do |t|
      t.string :text
      t.string :author_id
      t.string :work_id

      t.timestamps
    end
  end
end
