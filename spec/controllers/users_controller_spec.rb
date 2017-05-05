require 'rails_helper'

RSpec.describe Api::UsersController, :type => :controller do

  describe "POST #create" do
    context "with invalid params" do
      it "validates presence of both username and password" do
        post :create, format: :json, params: { user: { username: "Saber", password: "" } }
        expect(response).to have_http_status(422)
      end

      it "ensures password length is at least 6 characters" do
        post :create, format: :json, params: { user: { username: "Saber", password: "desu" } }
        expect(response).to have_http_status(422)
      end
    end

    context "with valid params" do
      it "logins the user" do
        post :create, format: :json, params: { user: { username:"Saber", password: "excalibur" } }
        expect(response).to be_success
        expect(response).to render_template(:show)
        user = User.find_by_username("Saber")
        expect(session[:session_token]).to eq(user.session_token)
      end

      it "creates three default anime libraries" do
        post :create, format: :json, params: { user: { username:"Saber", password: "excalibur" } }
        user = User.find_by_username("Saber")
        expect(user.anime_libraries.length).to eq(3)
      end
    end
  end


end
