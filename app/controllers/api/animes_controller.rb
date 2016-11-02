class Api::AnimesController < ApplicationController

  def index
    @animes = Anime.all
  end

  def create
    @anime = Anime.new(anime_params)
    @anime.save!
  end

  def show
    @anime = Anime.find_by_id(params[:id])
  end
  private
  def anime_params
    params.require(:anime).permit(:title, :synopsis, :start_date, :end_date, :image, :score, :episodes)
  end
end