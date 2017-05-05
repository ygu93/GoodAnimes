require 'rails_helper'

RSpec.describe Api::UserAnimesController, :type => :controller do
  let(:guest2) { User.create({username: "Guest2", password: "password"})}

  let(:anime_library) { AnimeLibrary.create({ user_id: guest2.id, name: 'Fantasy'})}

  let(:anime) { Anime.create({ title: "Fate Zero", synopsis: "Holy Grail War",
                                                   start_date: "2015-04-03",
                                                   end_date: "2015-08-03",
                                                   image: "fake.com",
                                                   score: 10,
                                                   episodes: 26,
                                                   media_type: "TV",
                                                   status: "Finished Airing"  })}


  describe "POST #create" do
    context "with invalid params" do
      it "renders errors" do
        post :create, format: :json, params: { user_anime: { user_id:"asdasdasdas" } }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "successfully renders json of created UserAnime" do
        post :create, format: :json, params: { user_anime: { user_id:guest2.id, anime_id: anime.id, anime_library_id: anime_library.id } }
        expect(response).to be_success
        expect(response).to render_template(:show)
      end
    end
  end

end
