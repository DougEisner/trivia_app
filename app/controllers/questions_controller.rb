require 'httparty'

class QuestionsController < ApplicationController

  def index
    level = params[:level]
    level = 'hard'
    questions = HTTParty.get("https://www.opentdb.com/api.php?amount=50&difficulty=#{level}&type=multiple")

    processed_questions = []
    questions["results"].each do |item|
      hash = {}
      question = item["question"]
      all_answers = item["incorrect_answers"] << item["correct_answer"]
      random_answers = all_answers.shuffle
      correct_answer = item["correct_answer"]

      random_answers = random_answers.clean_output
      hash = { question: question, answers: random_answers, correct_answer: correct_answer }
      processed_questions << hash
    end

    def clean_output(array)
      array.each do |s|
        s.gsub!("&#039;", "\'")
        s.gsub!("&quot;", "\"")
        s.gsub!("&#039;", '\'')
        s.gsub!("&amp;", '&')
      end

    end
      p processed_questions
  end
end
