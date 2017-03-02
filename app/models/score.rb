class Score < ApplicationRecord
  validates :user_id, :score, presence: true
  belongs_to :user
end
