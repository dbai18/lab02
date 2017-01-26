
  var userName = prompt ('What\'s your name?');
  alert('Hello ' + userName + '. Thanks for coming to my site!');

  // Guessing Game Comment


  //Setup
  var questionArray = ['Did I attend UC Berkeley?', 'Is fullstack development part of my long term goals?', 'Do I currently work as a SDET?', 'Is Paris my dream vacation destination?'];
  var myAnswerArray = ['yes', 'yes', 'yes', 'yes'];

  var answerOne = prompt(questionArray[0]);
  var answerOne = answerOne.toLowerCase();
  if(answerOne === myAnswerArray[0]){
    alert('That is correct!');
  }else{
    alert('That is incorrect! The correct answer is ' + myAnswerArray[0] + ".");
  }

  var answerTwo = prompt(questionArray[1]);
  var answerTwo = answerTwo.toLowerCase();
  if(answerTwo === myAnswerArray[1]){
    alert('That is correct!');
  }else{
    alert('That is incorrect! The correct answer is ' + myAnswerArray[1] + ".");
  }

  var answerThree = prompt(questionArray[2]);
  var answerThree = answerThree.toLowerCase();
  if(answerThree === myAnswerArray[2]){
    alert('That is correct!');
  }else{
    alert('That is incorrect! The correct answer is ' + myAnswerArray[2] + ".");
  }

  var answerFour = prompt(questionArray[3]);
  var answerFour = answerFour.toLowerCase();
  if(answerFour === myAnswerArray[3]){
    alert('That is correct!');
  }else{
    alert('That is incorrect! The correct answer is ' + myAnswerArray[3] + ".");
  }

  // var myAnswerArray = ['YES', 'YES', 'YES', 'YES'];
  // for(var i = 0; i < questionArray.Length; i++){
  //   var answer = prompt(questionArray[i]);
  //   var upperAnswer = answer.toUpperCase();
  // if (upperAnswer === myAnswerArray[i])
  // {
  //   ('That is correct!');
  // }
  // else{
  //   alert('That is incorrect! The answer is \"Yes\"!');
  // }
  // }
