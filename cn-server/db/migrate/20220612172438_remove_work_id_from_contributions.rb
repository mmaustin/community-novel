class RemoveWorkIdFromContributions < ActiveRecord::Migration[7.0]
  def change
    remove_column :contributions, :work_id, :string
  end
end
