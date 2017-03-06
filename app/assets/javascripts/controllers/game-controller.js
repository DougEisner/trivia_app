(function(ng) {

    ng.module('TriviaApp').controller('GameController', function($state, localStorageService, $scope, DataRequestService, $q, UserService) {

        $scope.currentUser = UserService.getUser(); // gets the current user data from the service **USE THIS IN EVERY CONTROLLER**

        $scope.allQuestions = []; // stores all questions
        $scope.correctCount = 0; // count for correct answers
        $scope.incorrectCount = 0; // count for incorrect answers
        $scope.count = ''; // count for page/ # of question user is on
        $scope.currentQuestion = {}; // current question obj
        $scope.questionCounter = 0; //**** IF COUNTER IS > 9 , show submit button, dispay none the container of questions
        $scope.correctTotal = 0; // send to backend after each round
        $scope.incorrectTotal = 0;

        //   GAME LOGIC *///

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

                $scope.currentQuestion.questionObj = response.data.questions[0]; // might not need this extra obj?
                $scope.currentQuestion.question = response.data.questions[0].question;
                $scope.currentQuestion.correctAnswer = response.data.questions[0].correct_answer;
                $scope.currentQuestion.answers = response.data.questions[0].answers;


                $scope.allQuestions.push($scope.currentQuestion);

                console.log($scope.currentQuestion);
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
                console.log($scope.correctCount + 'correct');
                return true;
            } else {
                $scope.incorrectCount++;
                console.log($scope.incorrectCount + 'incorrect');
                return false;
            }
        };

        //**  Next Question function  ** //

        $scope.nextQuestion = function() {
            // $scope.getQuestion();
            $scope.getUserAnswer();
            $scope.checkAnswer();
        };



        // $scope.processStats = function() { // ng-submit = processStats();
        //
        //       for (let i = 0; i < allQuestions.length; i++ ) {
        //           $scope.correctTotal = $scope.correctCount;
        //           $scope.incorrectTotal = $scope.incorrectCount;
        //
        //         //   $scope.currentUser.userTotal = $scope.correctTotal;
        //         //   $scope.currentUser.userIncorrect = $scope.incorrectTotal;
        //       }
        //
        //     //   console.log($scope.currentUser);
        //
        //       $q.when(DataRequestService.post('/scores, ')).then((response) => {
        //
        //
        //       }).catch((error) => {
        //           console.log(error);
        //       });
        //     //   state.go
        //   };


    });

})(angular);
