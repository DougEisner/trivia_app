(function(ng) {

    ng.module('TriviaApp').controller('GameController', function($state, localStorageService, $scope, DataRequestService, $q, UserService) {


        $scope.userInfo = function() {
            let user = UserService.getUser();
            $scope.setInfo(user);
            $scope.currentUser = user; // stores the signup form submission
            console.log($scope.currentUser);
            return $scope.currentUser;
        };

        $scope.allQuestions = []; // stores all questions
        $scope.correctCount = 0; // count for correct answers
        $scope.incorrectCount = 0; // count for incorrect answers
        $scope.count = ''; // count for page/ # of question user is on
        $scope.currentQuestion = {}; // current question obj
        $scope.questionCounter = 0;
        $scope.true = 'correct';
        $scope.false = 'incorrect';
        $scope.scoreObj = {};

        let user = UserService.getUser();


        // /** JQUERY Class Toggles, Adds, & Removals  ** //

        // $('.bummer').addClass('is-hidden');
        $('.get-question').on('click', function() {
            $('.trivia-question').addClass('is-hidden');
            $('.radio').addClass('is-hidden');
        });

        $('.submit-answers').addClass('is-hidden');
        $('.question-counter').addClass('is-hidden');

        $('.submit-answers').on('click', function() {
            $('.show-answer-container').removeClass('is-hidden');
            $('.play-again-button').removeClass('is-hidden');
            $scope.postScores();
        });

        $('.play-again-button').on('click', function() {
            $('.show-answer-container').addClass('is-hidden');
            $('.play-again-button').addClass('is-hidden');
        });

        $scope.changeToGamePage = function() {
            $state.go('TriviaParent.game');
        };


        // /**  Get Question function ** //
        $scope.getQuestion = function() {
            $scope.currentQuestion = {};
            $q.when(DataRequestService.get('/questions/index')).then((response) => {
                $('.question-counter').removeClass('is-hidden');
                $scope.currentQuestion.questionObj = response.data.questions[0]; // might not need
                $scope.currentQuestion.question = response.data.questions[0].question;
                $scope.currentQuestion.correctAnswer = response.data.questions[0].correct_answer;
                $scope.currentQuestion.answers = response.data.questions[0].answers;


                $scope.allQuestions.push($scope.currentQuestion);


                console.log($scope.allQuestions);

                $scope.count = $scope.allQuestions.length;

                if ($scope.count > 9) {
                    $('.submit-answers').removeClass('is-hidden');
                    $('.get-question').toggleClass('is-hidden');
                }

            }).catch((error) => {
                console.log(error);
            });
        };


        //**  Get User Answer function  ** //

        $scope.getUserAnswer = function() {
            if ($("input[name='answer']").is(':checked')) {
                $scope.currentQuestion.userAnswer = $("input[name='answer']:checked").val();
                console.log($scope.currentQuestion);
                $scope.currentQuestion.isUserAnswerCorrect = $scope.checkAnswer();
            } else {
                $("input[name='answer']").attr('checked', false);
            }
        };


        //**  Check User Answer function  ** //

        $scope.checkAnswer = function() {
            console.log($scope.currentQuestion.userAnswer);
            console.log($scope.currentQuestion.correctAnswer);
            if ($scope.currentQuestion.userAnswer === $scope.currentQuestion.correctAnswer) {
                $scope.correctCount++;
                return $scope.true;
            } else {
                $scope.incorrectCount++;
                return $scope.false;
            }
        };

        //**  Next Question function  ** //

        $scope.nextQuestion = function() {
            $scope.getUserAnswer();
            $scope.checkAnswer();
        };



        $scope.postScores = function() {
            console.log('in');
            $scope.getLocalStorage = localStorageService.get('userInfo');
            let id = $scope.getLocalStorage.id;
            $scope.scoreObj = {
                user_id: $scope.getLocalStorage.id,
                game_score: $scope.correctCount
            };


            $q.when(DataRequestService.postScores('/scores', $scope.scoreObj)).then((response) => {
                // localStorageService.set('score', $scope.scoreObj);
                console.log(response);

                // $state.go('gameParent.leader');
            }).catch((error) => {
                console.log(error);
            });
        };

    });

})(angular);
