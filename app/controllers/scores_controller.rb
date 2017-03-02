require 'json'

class ScoresController < ApplicationController
  def index
    @scores = Score.all
    render json: @scores
  end

  def create
    @score = Score.new(score_params)

    if @score.save
      render json: @score, status: :created, location: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  def score_params
      params.require(:score).permit(:score, :user_id)
    end
end
