// starting of quiz app

var readLineSync = require('readline-sync');

const chalk = require('chalk');

//user input

var userName = readLineSync.question(chalk.blue("Enter your name: "));
var welcomeMessage = chalk.cyan("Welcome onboard!! ");
var checkMessage = "Let's check how well do you know our country!!";

var score = 0;

var highScore =[
  { 
    name: "Shivom",
  scores: 9
},
{
  name: "Manish",
  scores: 8
}
]

//processing
console.log("");
console.log(welcomeMessage +  chalk.cyan(userName));
console.log(chalk.yellowBright(checkMessage));
console.log("");

questionOne = {
  question: "Who was our first PrimeMinister?",
  options: ["Narendra Modi", "J.L. Nehru", "Lal Bhadur Shastri"],
  answer: "J.L. Nehru"
}

questionTwo = {
  question: "What is the capital of Indian state Nagaland?",
  options: ["Shillong","Aizawl", "Kohima"],
  answer: "Kohima"
}

questionThree = {
  question: "how many union territories in India?",
  options: [6,8,7],
  answer: 8
}


questionFour = {
  question: "Which of the following is national animal of India",
  options: ["Lion", "Tiger", "Cow"],
  answer: "Tiger"
}

questionFive = {
  question: "In which year india won first men's ICC ODI world cup?",
  options: [1983, 2007, 2011],
  answer: 1983
}

questionSix = {
  question: "Indian state Jharkhand was formed in which year?",
  options: ["2000", "1956", "1947"],
  answer: "2000"
}

questionSeven = {
  question: "which of the following is the capital of Lakshadweep?",
  options: ["Port Blair","Pondicherry", "Kavaratti"],
  answer: "Kavaratti"
}

questionEigth = {
  question: "When was the national animal of India adopted",
  options: [1973,1975,1962],
  answer: 1973
}


questionNine = {
  question: "Who was first Attorney General of India?",
  options: ["C.K. Daftari", "M.C. Setalvad", "L.N. Sinha"],
  answer: "M.C. Setalvad"
}

questionTen = {
  question: "Who win the men's ICC ODI world cup?",
  options: ["Australia" , "England", "India"],
  answer: "Australia"
}
function play(playquestion, playanswer , playoptions){
 
 console.log(chalk.magenta(playquestion));

 var index = readLineSync.keyInSelect(playoptions);
  if(playoptions[index] === playanswer){
    console.log(chalk.green("Your are Right!!"));
    console.log("----");
    score = score +1;
  }
  else{
    console.log(chalk.red("You are wrong!!"));
     console.log("----");
  }

}

function level(chosenarray){
  for(i=0;i<chosenarray.length;i++){
    var item = chosenarray[i];
    play(item.question,item.answer, item.options);
}
}

var questionsarr = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var questionsmed = [questionSix, questionSeven, questionEigth, questionNine, questionTen];

level(questionsarr);

if(score>3){
  console.log("Congrats, your score is above 3!!");
  if( readLineSync.keyInYN("Do you want to play Level 2?")){
    console.log("Welcome to level 2");
    console.log("");
    level(questionsmed);

  }
  
}
console.log("Thanks for attending the quiz. Your score is: " + score);
console.log("");
console.log("Our top scorers are: ")
for(var i=0;i<highScore.length;i++){
  console.log(highScore[i].name + " has score " + highScore[i].scores);
  if(score>highScore[i].scores){
    console.log("Hurray!! You have beaten " + highScore[i].name);
    console.log("Please send screenshot of your score to us");
  }
}
