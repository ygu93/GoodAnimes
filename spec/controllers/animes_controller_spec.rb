require 'rails_helper'

RSpec.describe Api::AnimesController, :type => :controller do

  describe "GET #index" do

    it "returns the index of all animes" do
      get :index, format: :json
      expect(response).to be_success
      expect(response).to render_template(:index)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      before(:each) do
        post :create, format: :json, params: { anime: { title: "Fate Zero",
          synopsis: "Holy Grail War",
          start_date: "2015-04-03",
          end_date: "2015-08-03",
          image: "fake.com",
          score: 10,
          episodes: 26,
          media_type: "TV",
          status: "Finished Airing"  } }
        end
      it "successfully creates anime" do
        expect(response).to be_success
      end
    end
  end

  describe "GET #show" do
    before(:each) do
      post :create, format: :json, params: { anime: { title: "Fate Stay Night",
        synopsis: "Holy Grail War",
        start_date: "2015-04-03",
        end_date: "2015-08-03",
        image: "fake.com",
        score: 10,
        episodes: 26,
        media_type: "TV",
        status: "Finished Airing"  } }
      end
    it "successfully shows anime" do
      anime = Anime.find_by_title("Fate Stay Night")
      get :show, format: :json, params: { id: anime.id }
      expect(response).to be_success
      expect(response).to render_template(:show)
    end
  end


end
