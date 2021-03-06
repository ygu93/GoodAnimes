class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence:true
  after_initialize :ensure_session_token
  validates :password, length: { minimum:6, allow_nil:true }
  validates :username, uniqueness: true
  has_many :anime_libraries
  has_many :user_animes
  has_many :animes, through: :user_animes
  has_many :reviews
  attr_reader :password

  def self.find_by_credentials(username, password)
		@user = User.find_by(username: username)
		return nil unless @user
		@user.is_password?(password) ? @user : nil
	end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    bc = BCrypt::Password.new(self.password_digest)
    bc.is_password?(password)
  end
end
