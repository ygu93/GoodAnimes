require 'rails_helper'

RSpec.describe AnimeLibrary, type: :model do

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:user_id) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:user_animes).dependent(:destroy) }
    it { should have_many(:animes).through(:user_animes) }
  end

end
