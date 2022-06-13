class Author < ApplicationRecord
    has_many :works
    has_many :contributions
end
