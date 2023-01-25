let randomNumber = Math.floor(Math.random() * 10 + 1)
let guessNumber = document.getElementById("inputGuess")
let response = document.getElementById("response")
let divGuess = document.querySelector(".guess")
const button = document.querySelector(".guess-btn")
let countGuess = 1
let restartButton

function checkGuess(){
  if (randomNumber == guessNumber.value){
    response.innerHTML = `Parabéns! ${randomNumber} foi o numero sorteado.`
    gameOver()
  }else if (countGuess === 3){
    response.innerHTML = "VOCÊ PERDEU!!!"
    gameOver()
  } else {
      if (randomNumber > guessNumber.value){
        response.innerHTML = `Dica: o numero sorteado é maior que ${guessNumber.value}.`
    } else if (randomNumber < guessNumber.value){
        response.innerHTML = `Dica: o numero sorteado é menor que ${guessNumber.value}.`
  }
}
countGuess++  
guessNumber.value = ""  
guessNumber.focus()
}

function gameOver(){
  guessNumber.disabled = true
  button.parentNode.removeChild(button)
  restartButton = document.createElement("button")
  
  restartButton.style.background = "#4682B4"
  restartButton.style.padding = "10px"
  restartButton.style.border = "none"
  restartButton.style.color = "#fff"
  restartButton.style.fontWeight = "bold"
  restartButton.style.fontSize = "1.2em"
  restartButton.style.borderRadius = "7px"
  restartButton.style.cursor = "pointer"
  
  restartButton.textContent = "Começar nova partida"
  divGuess.appendChild(restartButton)
  restartButton.addEventListener("click", restartGame)
}

function restartGame(){
  countGuess = 1
  restartButton.parentNode.removeChild(restartButton)
  divGuess.appendChild(button)
  guessNumber.disabled = false
  guessNumber.value = ""
  guessNumber.focus()
  response.innerHTML = ''
  
  randomNumber = Math.floor(Math.random()* 10 + 1)
}

button.addEventListener("click", checkGuess)