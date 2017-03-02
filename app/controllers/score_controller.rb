class ScoreController < ApplicationController
  def index
    @scores = Score.all
    render json: @scores
  end

  def create

  end
end
