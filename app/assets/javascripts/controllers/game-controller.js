(function(ng) {
    ng.module('TriviaApp').controller('GameController', function($state, localStorageService, $scope, DataRequestService, $q, UserService) {
        console.log('hi');


        $('.submit-answers').on('click', function() {
            // console.log('in');
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

        $scope.currentUser = UserService.getUser(); // gets the current user data from the service **USE THIS IN EVERY CONTROLLER**

        $scope.allQuestions = []; // stores all questions
        $scope.correctCount = 0; // count for correct answers
        $scope.incorrectCount = 0; // count for incorrect answers
        $scope.count = $scope.allQuestions.length + 1; // count for page/ # of question user is on
        $scope.currentQuestion = {}; // current question obj



        // //   GAME LOGIC  /** USE SCOPE!!!!! *///


        //   1)

        // get question function
        $scope.getQuestion = function() {
            $q.when(DataRequestService.get('/questions/index')).then((response) => {
                console.log(response);


                $scope.currentQuestion = {}; // set currentQuestion to an empty object

                $scope.allQuestions = response.data.questions; // set the response questions to the all questions array

                //   console.log($scope.allQuestions);

                //   $scope.currentQuestion.question = response.data
                //
                //   getAnswer(this.allQuestions.whatever); /// maybe this instead?
                //
                //   build current question obj
                //       this.currentQuestipn.question = response.question // THIS WOULD GO IN ANGULAR HTML
                //       this.currentoptions.options = response.options // aray of options
                //       this.correctAnswer.correct answer = response.correctanswer
                //
                //      allQuestions.push(currentQuestion); // push currentQuestion into all questions array ??
                //      console.log(allQuestions)
                //      display the question


                //   console.log(this.allQuestions);
            }).catch((error) => {
                console.log(error);
            });
        };
        //
        //  2 this.getUserAnswer = function() {
        //
        //      let $scope.currentQuestion.userAnswer =  $("input[type='radio'][name='rate']:checked").val();
        //       $scope.currentQuestion.isCorrect = $scope.checkAnswer();
        //       $scope.allQuestions.push(currentQuestion);
        //
        //     //   for (let i = 0; i < allQuestions.length; i++) {
        //       //
        //     //   UserService.userQuestions.question = currentQuestion.question
        //     //   UserService.userQuestions.answer =  $("input[type='radio'][name='rate']:checked").val();
        //     //   UserService.userQuestions.correct = checkAnswer();
        //       //
        //     //   allQuestions.push(UserService.userQuestions); // push userQuestions obj into allQuestions array
        //   }
        //
        //     //   this.newAnswer = {};
        //     //   newAnswer.question = ''; // response.question????
        //     //   newAnswer.answer = ''; // response.answer / ng-model = newAnswer.answer? for radio button or $("input[type='radio'][name='rate']:checked").val();
        //     //   newAnswer.correct = checkAnswer();
        //       //
        //     //   allQuestions.push(newAnswer); // push newAnswer obj into allQuestions array
        //
        //   };
        // //
        // 3)  this.checkAnswer = function() {
        //
        //     if ($scope.currentQuestion.answer === $scope.currentQuestion.userAnswer) {
        //         return true;
        //         right++
        //     } else {
        //         wrong++
        //         return false;
        //     }
        //
        //     //   for (let i = 0; i < allQuestions.length; i++) {
        //       //
        //       //
        //     //                 if( currentquestion.answer === UserService.userQuestions.answer)
        //       //
        //     //       // if user answer (radio button selection) ==== response.answer then  increment the correctCount & return true
        //     //       //  else increment incorrect count and return false
        //       //
        //     //       // if.thiscurrentquestion.answer ==== this.currentquestion.useranswer
        //       //
        //     //             $("input[type='radio'][name='rate']:checked").val();
        //
        //   };
        //
        //  4) this.nextQuestion = function() { // ng-submit = nextQuestion(); tied to next button (on next button submit listener => getAnswer() and getQuestion())
        //
        //
        //      // ng-model or jquery to get their selection
        //      // store into current question obj as user answer prop
        //      // push into all questions array
        //     //  getQuestion();
        //      getUserAnswer();
        //      getQuestion();
        //     //  getUserAnswer();
        //   };
        //
        // //   this.processStats = function() { // ng-submit = processStats();
        // //       // iterate over all questions array and print results // You scored (correct)/ out of (count)
        //
        // // ng-repeat  =  question allQuestions
        //   //
        //     //   for (let i = 0; i < allQuestions.length; i++ ) {
        //     //       this.question = this.AllQuestions.newAnswer.question
        //     //       this.correctTotal = correctCount;
        //     //       this.incorrectTotal = incorrectCount;
        //     //   }
        // //       $q.when(DataRequestService.post('')).then((response) => {
        // //           send backend  correct
        // //           console.log(response);
        // //           this.allQuestions = response.data; // set the response to the allQuestions Array?
        // //           getAnswer(response.data); /// maybe this instead?
        // //           checkAnswer(response.data);
        // //           console.log(this.allQuestions);
        //   //
        // //           SEND THEM BACK THE CORRECT AND incorrect
        // //           this.correct, this.incorrect
        // //       }).catch((error) => {
        // //           console.log(error);
        // //       });
        // //       // state.go
        // //   }
        //
        // //   ng-show submit button if "counter === 10"
        // //   ng-hide next button if "counter === 10 " // if time over weekend look into doing this with jquery




    });

})(angular);
