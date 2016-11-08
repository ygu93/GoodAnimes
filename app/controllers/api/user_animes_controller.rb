class Api::UserAnimesController < ApplicationController
  def create
    @user_anime = UserAnime.new(user_anime_params)
    if @user_anime.save
      render :show
    else
      render json: @user_anime.errors.full_messages, status:422
    end
  end

  def show
    @user_anime = UserAnime.find_by_id(params[:id])
  end

  def edit
    @user_anime = UserAnime.find_by_id(params[:id])
  end

  def update
    @user_anime = UserAnime.find_by_id(params[:id])
    if @user_anime.update(anime_library_params)
    else
      render json: @user_anime.errors.full_messages, status:422
    end
  end

  def destroy
    @user_anime = UserAnime.find_by_id(params[:id])
    @user_anime.destroy
    render json: @anime_library
  end

  private
  def user_anime_params
    params.require(:user_anime).permit(:user_id, :anime_library_id, :anime_id, :user_start_date, :user_end_date, :user_rating)
  end






  private

  def user_anime_params
    params.require(:user_anime).permit(:user_id, :anime_id, :anime_library_id, :user_rating, :user_start_date, :user_end_date)
  end
end
