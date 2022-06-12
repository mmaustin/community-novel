class CreateWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :works do |t|
      t.string :title
      t.string :genre
      t.integer :contributions
      t.integer :author_id

      t.timestamps
    end
  end
end
