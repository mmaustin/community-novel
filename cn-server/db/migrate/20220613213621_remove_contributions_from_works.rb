class RemoveContributionsFromWorks < ActiveRecord::Migration[7.0]
  def change
    remove_column :works, :contributions, :integer
  end
end
