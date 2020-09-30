var gameScore = 0

var correct = document.querySelector('#correct')

var startButton = document.querySelector('#start-btn')
var answerOne = document.querySelector('#answer-buttons1')
var answerTwo = document.querySelector('#answer-buttons2')
var answerThree = document.querySelector('#answer-buttons3')
var answerFour = document.querySelector('#answer-buttons4')
var answerFive = document.querySelector('#answer-buttons5')
var beginH1 = document.querySelector('.controls')
var endOfGame = document.querySelector('.gameOver')
var correctTotal = document.querySelector('.gameScore')
correctTotal.innerHTML = gameScore
var clearButton = document.querySelector('.clear')

var questionContainer1 = document.querySelector('.question1')
var questionContainer2 = document.querySelector('.question2')
var questionContainer3 = document.querySelector('.question3')
var questionContainer4 = document.querySelector('.question4')
var questionContainer5 = document.querySelector('.question5')

startButton.addEventListener('click', startGame)

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    beginH1.classList.add('hide')
    questionContainer1.classList.remove('hide')
    endOfGame.classList.add('hide')
    countDownToStart()
}

var countdown = 21

function countDownToStart() {
    countdown--
  
    if(countdown >= 0){
    document.querySelector('.countDown').innerHTML = countdown
      setTimeout ( countDownToStart, 1000)
    } else {
        var gameEnd = document.querySelector('.end')
        gameEnd.classList.remove('hide')
        endOfGame.classList.remove('hide')
    }
}
var questionIndex = 1

questionContainer1.addEventListener('click', checkAnswer)

function checkAnswer(event) {
        console.log(event.target.classList)
    if( event.target.classList.contains('correct') ){
        console.log('You are correct')
        gameScore++
        correctTotal.innerHTML = gameScore
    } else {
        console.log('Wrong')
        countdown -= 5
    }

    document.querySelector(`.question${questionIndex}`).classList.add('hide')
    document.querySelector(`.question${questionIndex}`).removeEventListener('click', checkAnswer )
    questionIndex++
    document.querySelector(`.question${questionIndex}`).classList.remove('hide')
    document.querySelector(`.question${questionIndex}`).addEventListener('click', checkAnswer)
    
}

const form = document.querySelector('form')
const ol = document.querySelector('ol')
const button = document.querySelector('button')
const input1 = document.querySelector('#finalScoreName')


const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ol.appendChild(li)
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()
  
    liMaker(input1.value)
    input1.value = ''
  })

  clearButton.addEventListener('click', function () {
    localStorage.clear()
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild)
    }
  })