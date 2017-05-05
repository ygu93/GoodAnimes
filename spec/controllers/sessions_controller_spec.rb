require 'rails_helper'

RSpec.describe Api::SessionsController, :type => :controller do
  let!(:guest) { User.create({username: "Guest3", password: "password"})}

  describe "POST #create" do
    context "with invalid credentials" do
      it "renders errors" do
        post :create, format: :json, params: { user: { username: "Guest3", password: "asdf" } }
        expect(response).to have_http_status(401)
        expect(response.body).to include('Invalid Username or Password')
      end
    end

    context "with valid credentials" do
      it "successfully renders json of user" do
        post :create, format: :json, params: { user: { username: "Guest3", password: "password" } }
        expect(response).to be_success
        expect(response).to render_template(:show)
      end

      it "logs in the user" do
        post :create, format: :json, params: { user: { username: "Guest3", password: "password" } }
        user = User.find_by_id(guest.id)

        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe "DELETE #destroy" do

    context "when a user is logged in" do
      before do
        post :create, format: :json, params: { user: { username: "Guest3", password: "password" } }
        @session_token = User.find_by_username("Guest3").session_token
      end

      it "successfully logs out current user" do
        delete :destroy, format: :json
        expect(session[:session_token]).to be_nil

        guest = User.find_by_username("Guest3")
        expect(guest.session_token).not_to eq(@session_token)
      end
    end

    context "when no one is logged in" do
      it "returns an error" do
        delete :destroy, format: :json
        expect(response).to have_http_status(404)
        expect(JSON.parse(response.body)).to eq(["Nobody is signed in"])
      end
    end

  end
end
