(function(ng) {

  ng.module('TriviaApp').controller('GameController', function($state, localStorageService, $scope, DataRequestService, $q, UserService) {
      console.log('hi');
      $scope.currentUser = UserService.getUser(); // gets the current user data from the service **USE THIS IN EVERY CONTROLLER**

      $scope.allQuestions = []; // stores all questions
      $scope.correctCount = 0; // count for correct answers
      $scope.incorrectCount = 0; // count for incorrect answers
      $scope.count = ''; // count for page/ # of question user is on
      $scope.currentQuestion = {}; // current question obj
      $scope.questionCounter = 0; //**** IF COUNTER IS > 9 , show submit button, dispay none the container of questions
      $scope.correctTotal = 0; // send to backend after each round
      $scope.incorrectTotal = 0;

    // //   GAME LOGIC  /** USE SCOPE!!!!! *///

    // /** JQUERY Class Toggles, Adds, & Removals  ** //

    $('.bummer').addClass('is-hidden');
    $('.submit-answers').addClass('is-hidden');
    $('.question-counter').addClass('is-hidden');
    //
    $('.get-question').on('click', function() {
    //     $('.get-question').toggleClass('is-hidden');
    //     $('.bummer').removeClass('is-hidden');
    //     $('.submit-answers').addClass('is-hidden'); // remove it when counter > 9
        $('.question-counter').removeClass('is-hidden');
    //
    //     // $scope.getQuestion = function() { // tied to my next question button
    //     //     if ($scope.questionCounter < 10) {
    //     //
    //     //       $q.when(DataRequestService.get('/questions/index')).then((response) => {
    //     //         //   console.log(response);
    //     //
    //     //           $scope.currentQuestion.questionObj = response.data.questions[0];
    //     //           $scope.currentQuestion.question = $scope.currentQuestion.questionObj.question;
    //     //           $scope.currentQuestion.correctAnswer = $scope.currentQuestion.questionObj.correct_answer;
    //     //           $scope.currentQuestion.answers = $scope.currentQuestion.questionObj.answers;
    //     //
    //     //           console.log($scope.currentQuestion);
    //     //
    //     //           for (let i = 0; i < 4; i++) {
    //     //                 console.log($scope.currentQuestion.answers[i]);
    //     //           }
    //     //
    //     //           $scope.questionCounter = $scope.questionCounter + 1;
    //     //
    //     //           console.log($scope.questionCounter);
    //     //       }).catch((error) => {
    //     //               console.log(error);
    //     //           });
    //     //
    //     //     } else {
    //     //          console.log('Game OVER!!'); // show submit button
    //     //     }
    //     // };
        });


        $scope.getQuestion = function() { // tied to get question button , /* maybe call this on load */ ?
            $q.when(DataRequestService.get('/questions/index')).then((response) => {

                $scope.currentQuestion.questionObj = response.data.questions[0];
                $scope.currentQuestion.question = response.data.questions[0].question;
                $scope.currentQuestion.correctAnswer = response.data.questions[0].correct_answer;
                $scope.currentQuestion.answers = response.data.questions[0].answers;

                $scope.allQuestions.push($scope.currentQuestion);
                console.log($scope.allQuestions);

                $scope.count = $scope.allQuestions.length;

                if ($scope.count > 9 ) {
                    $('.submit-answers').removeClass('is-hidden');
                    $('.get-question').toggleClass('is-hidden');
                }

                // console.log($scope.currentQuestion);


            }).catch((error) => {
                console.log(error);
            });
        };

        $scope.getUserAnswer = function() {
            if($("input[name='answer']").is(':checked')) {
                $scope.currentQuestion.userAnswer = $("input[name='answer']:checked").val();
                console.log($scope.currentQuestion);
                $scope.currentQuestion.isUserAnswerCorrect = $scope.checkAnswer();
            } else {
                $("input[name='answer']").attr('checked', false);
            }
        };

        $scope.checkAnswer = function() {
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

        $scope.nextQuestion = function() {
            $scope.getQuestion();
            $scope.getUserAnswer();
            $scope.checkAnswer();
        };



        this.processStats = function() { // ng-submit = processStats();

              for (let i = 0; i < allQuestions.length; i++ ) {
                  $scope.correctTotal = $scope.correctCount;
                  $scope.incorrectTotal = $scope.incorrectCount;

                //   $scope.currentUser.userTotal = $scope.correctTotal;
                //   $scope.currentUser.userIncorrect = $scope.incorrectTotal;
              }

            //   console.log($scope.currentUser);

              $q.when(DataRequestService.post('/scores, ')).then((response) => {


              }).catch((error) => {
                  console.log(error);
              });
            //   state.go
          };







    //       $q.when(DataRequestService.get('/questions/index')).then((response) => {
    //           console.log(response);
      //
    //           $scope.currentQuestion.questionObj = response.data.questions[0];
    //           $scope.currentQuestion.question = $scope.currentQuestion.questionObj.question;
    //           $scope.currentQuestion.correctAnswer = $scope.currentQuestion.questionObj.correct_answer;
    //           $scope.currentQuestion.answers = $scope.currentQuestion.questionObj.answers;
      //
    //           for (let i = 0; i < 4; i++) {
      //
    //                 console.log($scope.currentQuestion.answers[i]);
      //
    //           }
      //
    //           $scope.questionCounter = $scope.questionCounter + 1;
      //
    //           console.log($scope.questionCounter);
    //       } ) else {
    //           console.log('Game OVER!!');
    //       }
      //
    //       }).catch((error) => {
    //           console.log(error);
    //       });
    //   };

      //   console.log($scope.currentQuestion.answers[0]);
      //   console.log($scope.currentQuestion.answers[1]);
      //   console.log($scope.currentQuestion.answers[2]);
      //   console.log($scope.currentQuestion.answers[3]);




      //   if (typeof $scope.currentQuestionIndex == 'undefined') {
      //       $scope.currentQuestionIndex = 0;
      // } else {
      //     $scope.currentQuestionIndex++;
      // }
      //
      // if ($scope.currentQuestionIndex >= response.data.questions.length) {
      //     $scope.currentQuestionIndex = 0
      // }

      // $scope.currentQuestion = response.data.questions[$scope.currentQuestionIndex]; // set currentQuestion to an empty object
      //
      //   console.log($scope.currentQuestion);
      //
      //   $scope.allQuestions = response.data.questions; // set the response questions to the all questions array

      //   console.log($scope.allQuestions);

      //   console.log(response.data.questions.question);

        // build current question object

      //   $scope.currentQuestion.question = response.data;

      //   $scope.currentQuestion.question = response.data
        //
      //   getAnswer(this.allQuestions.whatever); /// maybe this instead?



      //   build current question obj
          //   this.currentQuestipn.question = response.question // THIS WOULD GO IN ANGULAR HTML
          //   this.currentoptions.options = response.options // aray of options
          //   this.correctAnswer.correct answer = response.correctanswer
           //
          //  allQuestions.push(currentQuestion); // push currentQuestion into all questions array ??
          //  console.log(allQuestions)
          //  display the question


      //   console.log(this.allQuestions);










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
    // //
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


  });




})(angular);
