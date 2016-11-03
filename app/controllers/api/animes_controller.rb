class Api::AnimesController < ApplicationController

  def index
    @animes = Anime.all
    @animes = @animes.sort{ |a, b| a["score"] <=> b["score"] }.reverse
    @animes = @animes.take(56)
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
    params.require(:anime).permit(:title, :synopsis, :start_date, :end_date, :image, :score, :episodes, :status, :media_type)
  end
end
