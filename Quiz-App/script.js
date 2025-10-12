const questionContaier = document.querySelector('.question-contaier');

const questions = document.querySelector('.question');

const optionsText = document.querySelectorAll('.option-text');
const options = document.querySelectorAll('.option');

const nextBtn = document.querySelector('.next-p')
const quizNumber = document.querySelector('.quiz-number')

const timerEl = document.querySelector('.timer')

const containerEl = document.querySelector('.container')
const correctWrongImgEle = document.querySelectorAll('.correct-wrong-img')
const correctAudioEl = document.querySelector('.correct-audio')
const wrongAudioEl = document.querySelector('.wrong-audio')

const quizQuestions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    options: ['<js>', '<scripting>', '<script>', '<javascript>'],
    answer: '<script>',
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    options: [
      "<script name='app.js'>",
      "<script src='app.js'>",
      "<script href='app.js'>",
      "<script link='app.js'>",
    ],
    answer: "<script src='app.js'>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World');",
      "alertBox('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    question: 'How do you create a function in JavaScript?',
    options: [
      'function myFunction()',
      'def myFunction()',
      'function:myFunction()',
      'create myFunction()',
    ],
    answer: 'function myFunction()',
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      'call myFunction()',
      'myFunction()',
      'call function myFunction()',
      'execute myFunction',
    ],
    answer: 'myFunction()',
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    options: ['if i = 5 then', 'if (i == 5)', 'if i == 5 then', 'if i = 5'],
    answer: 'if (i == 5)',
  },
  {
    question: 'How does a WHILE loop start?',
    options: [
      'while i = 1 to 10',
      'while (i <= 10)',
      'while (i <= 10; i++)',
      'while i <= 10',
    ],
    answer: 'while (i <= 10)',
  },
  {
    question: 'How can you add a comment in JavaScript?',
    options: [
      '<!-- This is a comment -->',
      '// This is a comment',
      "' This is a comment",
      '** This is a comment **',
    ],
    answer: '// This is a comment',
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onmouseclick', 'onchange', 'onmouseover', 'onclick'],
    answer: 'onclick',
  },
  {
    question: 'How do you declare a JavaScript variable?',
    options: [
      'v carName;',
      'variable carName;',
      'var carName;',
      'string carName;',
    ],
    answer: 'var carName;',
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    options: ['*', '-', '=', 'x'],
    answer: '=',
  },
  {
    question: 'What will the following code return: Boolean(10 > 9)?',
    options: ['NaN', 'false', 'true', 'undefined'],
    answer: 'true',
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    options: [
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'",
      "var colors = {1:'red', 2:'green', 3:'blue'}",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: 'How do you round the number 7.25 to the nearest integer?',
    options: ['Math.rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'rnd(7.25)'],
    answer: 'Math.round(7.25)',
  },
  {
    question: 'Which JavaScript keyword is used to declare a constant?',
    options: ['let', 'var', 'const', 'constant'],
    answer: 'const',
  },
  {
    question: 'Which method can be used to find the length of a string?',
    options: ['getLength()', 'length()', 'strlen()', '.length'],
    answer: '.length',
  },
  {
    question: "What is the output of typeof 'Hello'?",
    options: ['string', 'text', 'char', 'object'],
    answer: 'string',
  },
  {
    question: 'How do you write a for loop in JavaScript?',
    options: [
      'for (i = 0; i <= 5; i++)',
      'for i = 1 to 5',
      'foreach i in 5',
      'loop (i <= 5)',
    ],
    answer: 'for (i = 0; i <= 5; i++)',
  },
  {
    question: 'Which method removes the last element from an array?',
    options: ['pop()', 'shift()', 'remove()', 'delete()'],
    answer: 'pop()',
  },
  {
    question: 'Which company developed JavaScript?',
    options: ['Microsoft', 'Netscape', 'Sun Microsystems', 'Oracle'],
    answer: 'Netscape',
  },
];

// first question and option when reload
let currentIndex = 0
let quizNumberIndex = 1
let timeInterval
let correctAnswers = 0
let wrongAnswers = 0

function showQuestion(index){
  const currentQuestion = quizQuestions[currentIndex];
  questions.textContent = currentQuestion.question;

  optionsText.forEach((optionSpan, index) => {
    optionSpan.textContent = currentQuestion.options[index]
      
  });
  quizNumber.textContent = `${quizNumberIndex}  / ${quizQuestions.length}`

  



}
//matching options to answer and give right and wrong

options.forEach((option)=>{
  option.addEventListener('click',(e) =>{
const correctAnswer = quizQuestions[currentIndex].answer

if(option.innerText === correctAnswer){

option.classList.add('correct')
option.childNodes[3].childNodes[2].src = 'images/correct.svg'
option.childNodes[3].childNodes[2].style.display = 'block'
correctAudioEl.play()
correctAnswers++
} 
else{

option.childNodes[3].children[0].style.display = 'block'
option.classList.add('wrong')
option.childNodes[3].childNodes[2].src = 'images/wrong.svg'
option.childNodes[3].childNodes[2].style.display = 'block'
wrongAudioEl.play()
wrongAnswers++

}

  })





})
showQuestion(currentIndex)
showQuestion()


nextBtn.addEventListener('click',(e)=>{
  //reset correct and wrong img
  //reset correct and wrong class
  //reset you chose when wrong answer
options.forEach((opt )=> {
  opt.classList.remove('correct', 'wrong')
opt.childNodes[3].childNodes[2].src = ''
opt.childNodes[3].childNodes[2].style.display = 'none'
opt.childNodes[3].children[0].style.display = 'none'
});
containerEl.classList.remove('yellow')
containerEl.classList.remove('red')
 if(timeInterval){
        clearInterval(timeInterval)
    }
    startTime(30)
currentIndex++
quizNumberIndex++


if(currentIndex < quizQuestions.length){
    showQuestion()
  
}
 else{
    
 clearInterval(timeInterval)
 options.forEach(opt => opt.style.pointerEvents = 'none')
 timerEl.textContent = `00:00`
   questions.textContent = 'Quiz Finished'
   optionsText.forEach(span => span.textContent='')
   nextBtn.disabled = true
window.location.href = './results.html' // redirect to results
 }
})
 //now setting timer
function startTime(duration){
    if(timeInterval){
        clearInterval(timeInterval)
    }

    let timeLeft = duration
   
timeInterval = setInterval(() => {
   if(timeLeft <= 15){
containerEl.classList.add('yellow')
    }
   if(timeLeft <= 8){
containerEl.classList.add('red')
    }

    if(timeLeft === 0){
        clearInterval(timeInterval)
        timerEl.textContent = `00:00`
    }
    else{
        timerEl.textContent = `00:${timeLeft--}`
        


    }
},1000)
}
startTime(30)

