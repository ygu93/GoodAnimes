class Api::AnimeLibrariesController < ApplicationController

  def index
    @anime_libraries = current_user.anime_libraries
    @all_animes = current_user.user_animes
    @all_animes = @all_animes.select {|useranime| useranime.anime_id}.uniq {|anim| anim.anime_id}
    render "api/anime_libraries/index"
  end

  def create
    @anime_library = AnimeLibrary.new(anime_library_params)
    if @anime_library.save
      render "api/anime_libraries/show"
    else
      render json: @anime_library.errors.full_messages, status:422
    end
  end

  def show
    @anime_library = AnimeLibrary.find_by_id(params[:id])
    render "api/anime_libraries/show"
  end

  def edit
    @anime_libraries = current_user.anime_libraries
  end

  def update
    @anime_library = AnimeLibrary.find_by_id(params[:id])
    if @anime_library.update(anime_library_params)
      render "api/anime_libraries/show"
    else
      render json: @anime_library.errors.full_messages, status:422
    end
  end

  def destroy
    @anime_library = AnimeLibrary.find_by_id(params[:id])
    @anime_library.destroy
    render json: @anime_library
  end

  private
  def anime_library_params
    params.require(:anime_library).permit(:name, :user_id)
  end

end
