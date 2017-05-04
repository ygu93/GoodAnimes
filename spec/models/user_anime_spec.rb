require 'rails_helper'

RSpec.describe UserAnime, type: :model do

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:anime) }
    it { should belong_to(:anime_library) }
  end

end
