class AddAuthorIdToContributions < ActiveRecord::Migration[7.0]
  def change
    add_column :contributions, :author_id, :integer
  end
end
