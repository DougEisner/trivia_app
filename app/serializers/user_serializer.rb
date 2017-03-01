class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :image, :email#, :messages

  # has_many :messages
end
