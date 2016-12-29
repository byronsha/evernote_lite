class Notebook < ActiveRecord::Base
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :notes, dependent: :destroy

  def self.find_by_user_id(user_id)
    self.joins(:user).where(users: { id: user_id })
  end
end
