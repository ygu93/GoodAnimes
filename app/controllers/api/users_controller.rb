class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      AnimeLibrary.create({user_id:current_user.id, name:"Currently Watching"})
      AnimeLibrary.create({user_id:current_user.id, name:"Watched"})
      AnimeLibrary.create({user_id:current_user.id, name:"Plan to Watch"})
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
  end



  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
