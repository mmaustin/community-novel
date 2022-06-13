class Contribution < ApplicationRecord
    belongs_to :author 
    has_many :contributions
end
