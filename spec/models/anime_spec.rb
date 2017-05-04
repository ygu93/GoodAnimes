require 'rails_helper'

RSpec.describe Anime, type: :model do

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:synopsis) }
    it { should validate_presence_of(:start_date) }
    it { should validate_presence_of(:end_date) }
    it { should validate_presence_of(:image) }
    it { should validate_presence_of(:score) }
    it { should validate_presence_of(:episodes) }
    it { should validate_presence_of(:media_type) }
    it { should validate_presence_of(:status) }
  end

  describe 'associations' do
    it { should have_many(:user_animes) }
    it { should have_many(:users).through(:user_animes) }
    it { should have_many(:anime_libraries).through(:user_animes) }
    it { should have_many(:reviews) }
  end

end
