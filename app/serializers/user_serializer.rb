class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :image, :email, :scores

  has_many :scores
end
