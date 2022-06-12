class AddWorkIdToContributions < ActiveRecord::Migration[7.0]
  def change
    add_column :contributions, :work_id, :integer
  end
end
