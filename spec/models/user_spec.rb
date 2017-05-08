require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:guest) { User.new({username: "Guest", password: "password"})}

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
    it { should validate_uniqueness_of(:username)}
  end

  describe 'associations' do
    it { should have_many(:anime_libraries) }
    it { should have_many(:user_animes) }
    it { should have_many(:animes).through(:user_animes) }
  end

  describe 'class methods' do

    before(:each) do
      FactoryGirl.create(:user)
    end

    describe '::find_by_credentials' do
      it "should return nil when user doesn't exist" do
        expect(User.find_by_credentials('user1', 'password')).to eq(nil)
      end

      it "should return nil when password is invalid" do
        expect(User.find_by_credentials('Guest', 'passwor')).to eq(nil)
      end

      it "should return user when both username and password is correct" do
        expect(User.find_by_credentials('Arturia', 'pendragon')).to_not eq(nil)
      end
    end
  end

  describe 'instance methods' do

    before(:each) do
      FactoryGirl.create(:user)
    end

    describe '#reset_session_token!' do
      it "resets the user's session_token to a new token" do
        user = User.find_by_username('Arturia')
        session_token = user.session_token
        user.reset_session_token!
        expect(session_token).to_not eq(user.session_token)
      end
    end
  end

end
