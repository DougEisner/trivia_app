class ScoreSerializer < ActiveModel::Serializer
  attributes :nickname, :image, :scores

  belongs_to :user
end
