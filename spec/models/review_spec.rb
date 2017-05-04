require 'rails_helper'

RSpec.describe Review, type: :model do

  describe 'validations' do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:anime_id) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:anime) }
  end

  describe 'custom validations' do
    describe 'has_one_field' do
      it 'should return error if reviews does not have at least one required field' do
        review = Review.new({user_id:4})
        review.valid?
        expect(review.errors[:field]).to eq(["Can't be Blank"])
      end
    end
  end

end
