require 'rails_helper'

RSpec.describe Api::ReviewsController, :type => :controller do
  let(:guest2) { User.create({username: "Guest2", password: "password"})}

  let(:anime) { Anime.create({ title: "Fate Zero",
                                                  synopsis: "Holy Grail War",
                                                  start_date: "2015-04-03",
                                                  end_date: "2015-08-03",
                                                  image: "fake.com",
                                                  score: 10,
                                                  episodes: 26,
                                                  media_type: "TV",
                                                  status: "Finished Airing"  })}

  let(:review) { Review.create({ user_id: guest2.id, anime_id: anime.id, user_rating: 9 }) }


  describe "POST #create" do

    before do
      allow(controller).to receive(:current_user) { guest2 }
    end

    context "with invalid params" do
      it "renders errors" do
        post :create, format: :json, params: { review: { anime_id:anime.id } }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "successfully renders json of created review" do
        post :create, format: :json, params: { review: { anime_id:anime.id, user_rating:10 } }
        expect(response).to be_success
        expect(response).to render_template(:show)
      end
    end
  end

  describe "PUT #update" do
    context "with invalid params" do
      it "renders errors" do
        put :update, format: :json, params: { id: review.id, review: { user_rating: "" } }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "successfully updates and renders updated review" do
        put :update, format: :json, params: { id: review.id, review: { user_rating: 9 } }
        expect(response).to be_success
        expect(response).to render_template(:show)
      end
    end
  end

  describe "DELETE #destroy" do
    it "successfully deletes review and returns the deleted review" do
      delete :destroy, format: :json, params: { id: review.id }
      expect(response).to be_success
      body = JSON.parse(response.body)
      expect(body["id"]).to eq(review.id)
      expect(Review.exists?(review.id)).to be false
    end
  end
end
