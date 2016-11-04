class Api::UserAnimesController < ApplicationController
  def create
    @user_anime = UserAnime.new(user_anime_params)
    @user_anime.user_id = current_user.id
  end

  def show
    @user_anime = User_Anime.find_by_id(params[:id])
  end

  def index
  end

  def update
    if @user_anime.update(anime_library_params)
    else
      render json: @user_anime.errors.full_messages, status 422
    end
  end

  def destroy
    @user_anime.destroy
  end






  private

  def user_anime_params
    params.require(:user_anime).permit(:user_id, :anime_id, :anime_library_id, :user_rating, :user_start_date, :user_end_date)
  end
end
