class User < ActiveRecord::Base
  attr_reader :password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_many :notebooks, dependent: :destroy
  has_many :notes

  after_initialize :ensure_session_token

  before_save :downcase_user_data

  validates :username,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { in: 4..20 },
    format: { without: /\s/ }

  validates :password,
    length: {
      minimum: 6,
      allow_nil: true,
      message: "must be at least 6 characters"
    }

  validates_presence_of :password_digest

  validates :email,
    presence: true,
    format: {
      with: VALID_EMAIL_REGEX,
      message: "address is invalid"
    }

  validates :session_token,
    presence: true,
    uniqueness: true

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, maybe_password)
    user = self.find_by(username: username.downcase)

    return nil unless user

    user.is_password?(maybe_password) ? user : nil
  end

  def self.search(query)
    self.where("username ILIKE ?", "%#{query}%")
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    saved_password = BCrypt::Password.new(self.password_digest)

    saved_password.is_password?(password)
  end

  private

  def downcase_user_data
    self.username = self.username.downcase
    self.email = self.email.downcase
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
