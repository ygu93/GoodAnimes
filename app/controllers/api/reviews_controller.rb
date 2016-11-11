class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def show
    @review = Review.find_by_id(params[:id])
  end

  def edit
    @review = Review.find_by_id(params[:id])
    @anime = @review.anime
  end

  def update
    @review = Review.find_by_id(params[:id])
    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    @review.destroy
    render json: @review
  end


  private
  def review_params
    params.require(:review).permit(:anime_id, :user_id, :user_rating, :user_start_date, :user_end_date, :body)
  end


end
