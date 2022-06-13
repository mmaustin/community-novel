class AddContributionNumberToWorks < ActiveRecord::Migration[7.0]
  def change
    add_column :works, :contribution_number, :integer
  end
end
