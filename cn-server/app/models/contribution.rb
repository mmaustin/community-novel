class Contribution < ApplicationRecord
    belongs_to :author 
    belongs_to :work
end
