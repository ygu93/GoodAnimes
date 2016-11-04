class Api::AnimeLibrariesController < ApplicationController

  def index
    @anime_libraries = current_user.libraries
  end
  def create
    @anime_library = AnimeLibrary.new(anime_library_params)
    if @anime_library.save
    else
      render json: @anime_library.errors.full_messages, status:422
    end
  end

  def show
    @anime_library = AnimeLibrary.find_by_id(params[:id])
    @animes = @anime_library.animes
  end

  def update
    if @anime_library.update(anime_library_params)
    else
      render json: @anime_library.errors.full_messages, status 422
    end
  end

  def destroy
    @anime_library.destroy
  end

  private
  def anime_library_params
    params.require(:anime_library).permit(:name)
  end

end
