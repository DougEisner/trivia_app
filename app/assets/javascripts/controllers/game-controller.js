(function(ng) {
  ng.module('TriviaApp').controller('GameController', function($state, localStorageService, $scope, DataRequestService, $q) {
      console.log('hi');
//
//     //   GAME LOGIC  /** USE SCOPE!!!!! *///
//
//       this.allQuestions = []; // stores all questions
//       this.correctCount = 0; // count for correct answers
//       this.incorrectCount = 0; // count for incorrect answers
//       this.count = allQuestions.length + 1; // count for page/ # of question user is on
//       this.currentQuestion = {}
//
//       this.getQuestion = function() {
//           $q.when(DataRequestService.get('')).then((response) => {
//               console.log(response);
//               this.currentQuestion = {}
//             //   this.allQuestions = response.data; // set the response to the allQuestions Array?
//               getAnswer(this.allQuestions.whatever); /// maybe this instead?
//               // build current question obj
//
//                   this.currentQuestipn.response = // QUESTION: // THIS WOULD GO IN ANGULAR HTML
//                   this.currentoptions.options = response.options // aray of options
//                   this.correctAnswer.correct answer = response.correctanswer
//               }
//
//               console.log(this.allQuestions);
//           }).catch((error) => {
//               console.log(error);
//           });
//       };
//
//       this.getAnswer = function(response) {
//
//           this.newAnswer = {};
//           newAnswer.question = ''; // response.question????
//           newAnswer.answer = ''; // response.answer / ng-model = newAnswer.answer? for radio button or $("input[type='radio'][name='rate']:checked").val();
//           newAnswer.correct = checkAnswer();
//
//           allQuestions.push(newAnswer); // push newAnswer obj into allQuestions array
//
//       };
//
//       this.checkAnswer = function() {
//
//           for (let i = 0; i < allQuestions.length - 1; i++) { // don't know if I need - 1
//               // if user answer (radio button selection) ==== response.answer then  increment the correctCount & return true
//               //  else increment incorrect count and return false
//
//               // if.thiscurrentquestion.answer ==== this.currentquestion.useranswer
//
//                     $("input[type='radio'][name='rate']:checked").val();
//
//       };
//
//       this.nextQuestion = function() { // ng-submit = nextQuestion(); tied to next button (on next button submit listener => getAnswer() and getQuestion())
//
//          // ng-model or jquery to get their selection
//          // store into current question obj as user answer prop
//          // push into all questions array
//          // getQuestion();
//
//           checkAnswer();
//           getQuestion();
//
//       };
//
//     //   this.processStats = function() { // ng-submit = processStats();
//     //       // iterate over all questions array and print results // You scored (correct)/ out of (count)
//       //
//     //       for (let i = 0; i < allQuestions.length; i++ ) {
//     //           this.question = this.AllQuestions.newAnswer.question
//     //           this.correctTotal = correctCount;
//     //           this.incorrectTotal = incorrectCount;
//     //       }
//     //       $q.when(DataRequestService.post('')).then((response) => {
//     //           send backend  correct
//     //           console.log(response);
//     //           this.allQuestions = response.data; // set the response to the allQuestions Array?
//     //           getAnswer(response.data); /// maybe this instead?
//     //           checkAnswer(response.data);
//     //           console.log(this.allQuestions);
//       //
//     //           SEND THEM BACK THE CORRECT AND incorrect
//     //           this.correct, this.incorrect
//     //       }).catch((error) => {
//     //           console.log(error);
//     //       });
//     //       // state.go
//     //   }
//
//       ng-show submit button if "counter === 10"
//       ng-hide next button if "counter === 10 " // if time over weekend look into doing this with jquery
//
//
//
//
  });

})(angular);
