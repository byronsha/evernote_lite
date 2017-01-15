class Note < ActiveRecord::Base
  validates :notebook_id, presence: true

  belongs_to :notebook
  belongs_to :user

  def self.find_by_user_id(user_id)
    self.joins(:notebook).where(notebooks: { user_id: user_id })
  end
end
