(function(ng) {
  ng.module('TriviaApp').controller('GameController', function($state, localStorageService, $scope, DataRequestService, $q) {
      console.log('hi');

      // GAME LOGIC
      //
      // this.allQuestions = []; // stores all questions
      // this.correctCount = 0; // count for correct answers
      // this.incorrectCount = 0; // count for incorrect answers
      // this.count = allQuestions.length + 1; // count for page/ # of question user is on
      //
      // this.getQuestion = function() {
      //     $q.when(DataRequestService.get('')).then((response) => {
      //         console.log(response);
      //         this.allQuestions = response.data; // set the response to the allQuestions Array?
      //         getAnswer(this.allQuestions.whatever); /// maybe this instead?
      //         console.log(this.allQuestions);
      //     }).catch((error) => {
      //         console.log(error);
      //     });
      // };
      //
      // this.getAnswer = function(response) {
      //
      //     this.newAnswer = {};
      //     newAnswer.question = ''; // response.question
      //     newAnswer.answer = ''; // response.answer / ng-model = answer? for radio button
      //     newAnswer.correct = checkAnswer();
      //
      //     allQuestions.push(newAnswer); // push newAnswer obj into allQuestions array
      //
      // };
      //
      // this.checkAnswer = function() {
      //
      //     for (let i = 0; i < allQuestions.length - 1; i++) { // don't know if I need - 1
      //         // if user answer (radio button selection) ==== response.answer then  increment the correctCount & return true
      //         //  else increment incorrect count and return false
      //
      // };
      //
      // this.nextQuestion = function() { // ng-submit = nextQuestion(); tied to next button (on next button submit listener => getAnswer() and getQuestion())
      //     getAnswer();
      //     getQuestion();
      //
      // };
      //
      // this.processStats = function() { // ng-submit = processStats();
      //     // iterate over all questions array and print results // You scored (correct)/ out of (count)
      //     this.incorrect = '';
      //     this.question = '';
      //     this.correct = '';
      //
      //     for (let i = 0; i < allQuestions.length - 1; i++ ) { // don't know if need - 1
      //         this.question = this.AllQuestions.newAnswer.question
      //         this.correctTotal = correctCount;
      //         this.incorrectTotal = incorrectCount;
      //     }
      //     $q.when(DataRequestService.post('')).then((response) => {
      //         // send backend  correct
      //         // console.log(response);
      //         // this.allQuestions = response.data; // set the response to the allQuestions Array?
      //         // getAnswer(response.data); /// maybe this instead?
      //         // checkAnswer(response.data);
      //         // console.log(this.allQuestions);
      //
      //         // SEND THEM BACK THE CORRECT AND incorrect
      //         // this.correct, this.incorrect
      //     }).catch((error) => {
      //         console.log(error);
      //     });
      //     // state.go
      // }
      //
      // ng-show submit button if "counter === 10"
      // ng-hide next button if "counter === 10 " // if time over weekend look into doing this with jquery




  });

})(angular);
