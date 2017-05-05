require 'rails_helper'

RSpec.describe Api::AnimeLibrariesController, :type => :controller do
  let(:guest2) { User.create({username: "Guest2", password: "password"})}

  let(:anime_library) { AnimeLibrary.create({ user_id: guest2.id, name: 'Fantasy'})}

  describe "GET #index" do
    before do
      allow(controller).to receive(:current_user) { guest2 }
    end

    it "returns the current user's anime libraries index" do
      get :index, format: :json
      expect(response).to be_success
      expect(response).to render_template(:index)
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "renders errors" do
        post :create, format: :json, params: { anime_library: { user_id:1 } }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "successfully renders json of created library" do
        post :create, format: :json, params: { anime_library: { user_id:1, name: "Watched" } }
        expect(response).to be_success
        expect(response).to render_template(:show)
      end
    end
  end

  describe "PUT #update" do
    context "with invalid params" do
      it "renders errors" do
        put :update, format: :json, params: { id: anime_library.id, anime_library: { name: "" } }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "successfully updates and renders updated library" do
        put :update, format: :json, params: { id: anime_library.id, anime_library: { name: "Watching" } }
        expect(response).to be_success
        expect(response).to render_template(:show)
      end
    end
  end

  describe "DELETE #destroy" do
    it "successfully deletes library and returns the deleted library" do
      delete :destroy, format: :json, params: { id: anime_library.id }
      expect(response).to be_success
      body = JSON.parse(response.body)
      expect(body["id"]).to eq(anime_library.id)
      expect(AnimeLibrary.exists?(anime_library.id)).to be false
    end
  end
end
