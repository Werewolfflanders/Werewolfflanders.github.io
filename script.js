// variables for buttons, score, and questions
var startButton = document.getElementById('start-btn');

var questionsContainerElement = document.getElementById('question-container');
var navBarContainerElement = document.getElementById('nav-container');
var questionIndex = 0;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
  ];
// click to start the game
startButton.addEventListener('click', startGame) 


  

// when start button is clicked it will gain the "hide" property, questions and timer will be made unhidden.
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionsContainerElement.classList.remove('hide')
    navBarContainerElement.classList.remove('hide')


  // function for timer 
    function MyTimer(callback, val) {
      val = val || 75;
      var timer=setInterval(function() {
          callback(val);
          if(val-- <= 0) {
              clearInterval(timer);
          }
      }, 1000);
  }
  new MyTimer(function(val) {
      var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
      document.getElementById("seconds").textContent = timerMsg;
  });
  
}
populateQuestions()
function populateQuestions() {
  let currentQuestion = questions[questionIndex]
  var titleEl = document.getElementById("question");
  titleEl.textContent = currentQuestion.title
  let choices = currentQuestion.choices
  let choicesLength = currentQuestion.choices.length
  

  for (var i = 0; i < choicesLength; i++) {
  // create new button for each choice
  var choiceNode = document.createElement("button");
  choiceNode.textContent = choices[i];
  choiceNode.setAttribute("id", `choice${i}`)
  document.getElementsByClassName("choices")[0].appendChild(choiceNode);
  

  }
  
  // // add onclick to to each choice
  let choice0 = document.getElementById("choice0")
  let choice1 = document.getElementById("choice1")
  let choice2 = document.getElementById("choice2")
  let choice3 = document.getElementById("choice3")

  choice0.addEventListener("click", userChoice)
  choice1.addEventListener("click", userChoice)
  choice2.addEventListener("click", userChoice)
  choice3.addEventListener("click", userChoice)
  
}

let score = 0;
function userChoice(choice){
    console.log(choice.srcElement.innerText)
    let answer = choice.srcElement.innerText
    let currentQuestion = questions[questionIndex]
    if (answer == currentQuestion.answer){
        score++;
        console.log("correct");
    }
    else {
      console.log("wrong");
    }
    
    
    questionIndex++;
    populateQuestions();
    
    }
