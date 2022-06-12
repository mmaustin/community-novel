class RemoveAuthorIdFromContributions < ActiveRecord::Migration[7.0]
  def change
    remove_column :contributions, :author_id, :string
  end
end
