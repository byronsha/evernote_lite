class Note < ActiveRecord::Base
  validates :notebook_id, :title, presence: true

  belongs_to :notebook
  belongs_to :user

  def self.find_by_notebook_id(notebook_id)
    self.joins(:notebook).where(notebooks: { id: notebook_id })
  end
end
