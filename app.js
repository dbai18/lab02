
//Greeting
var userName = prompt ('What\'s your name?');
if(userName == null || userName === ""){
  userName = "guest";
}
alert('Hello ' + userName + '. Thanks for coming to my site!');

//Setup Arrays
var questionArray = ['Did I attend UC Berkeley?', 'Is fullstack development part of my long term goals?', 'Do I currently work as a SDET?', 'Is Paris my dream vacation destination?', 'Do I have a dog named, Eli?', 'What is one of my favorite dishes?'];
var myAnswerArray = ['yes', 'yes', 'yes', 'yes'];
var inputAnswerArray = ['yes', 'y', 'beef noodle soup', 'prime rib'];

//function to execute for loop
function guessingGameLoop(){
  for(var i = 0; i < questionArray.length; i++){
    var answer = prompt(questionArray[i]);
    var lowerAnswer = answer.toLowerCase();
    if (i === 5 && (inputAnswerArray.indexOf(lowerAnswer) === 3 || inputAnswerArray.indexOf(lowerAnswer) === 2)){
      console.log('Yum! That is correct!');
    }else if (inputAnswerArray.indexOf(lowerAnswer) >= 0 && i <= 4){
      console.log('That is correct!');
    }else{
      console.log('That is incorrect!');
    }
  }
}
// guessingGameLoop();

// var answerOne = prompt(questionArray[0]);
// var answerOne = answerOne.toLowerCase();
// if(answerOne === myAnswerArray[0]){
//   alert('That is correct!');
// }else{
//   alert('That is incorrect! The correct answer is ' + myAnswerArray[0] + ".");
// }
//
// var answerTwo = prompt(questionArray[1]);
// var answerTwo = answerTwo.toLowerCase();
// if(answerTwo === myAnswerArray[1]){
//   alert('That is correct!');
// }else{
//   alert('That is incorrect! The correct answer is ' + myAnswerArray[1] + ".");
// }
//
// var answerThree = prompt(questionArray[2]);
// var answerThree = answerThree.toLowerCase();
// if(answerThree === myAnswerArray[2]){
//   alert('That is correct!');
// }else{
//   alert('That is incorrect! The correct answer is ' + myAnswerArray[2] + ".");
// }
//
// var answerFour = prompt(questionArray[3]);
// var answerFour = answerFour.toLowerCase();
// if(answerFour === myAnswerArray[3]){
//   alert('That is correct!');
// }else{
//   alert('That is incorrect! The correct answer is ' + myAnswerArray[3] + ".");
// }

// var myAnswerArray = ['YES', 'YES', 'YES', 'YES'];

//loop to run questions
// for(var i = 0; i < questionArray.Length; i++){
//   var answer = prompt(questionArray[i]);
//   var lowerAnswer = answer.toLowerCase();
//   if (lowerAnswer === inputAnswerArray.indexOf(0) || lowerAnswer === inputAnswerArray.indexOf(1))
//   {
//     console.log('That is correct!');
//   }
//   else{
//     console.log('That is incorrect! The answer is \"yes\"!');
//   }
// }
