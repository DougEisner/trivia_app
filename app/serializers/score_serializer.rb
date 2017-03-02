class ScoreSerializer < ActiveModel::Serializer
  attributes :nickname, :image, :scores

  has_one :user
end
