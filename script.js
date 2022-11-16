const globalScore = {machineScore: 0, PlayerScore: 0}

function getMachineChoice() {
    const actChoice = ['Rock', 'paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3)
    return actChoice[randomNumber]
}

function getResult(playerChoice, MachineChoice) {
    let score;
    if(playerChoice == MachineChoice){
        score = 0
    }else if(playerChoice == 'Rock' && MachineChoice == 'Scissors'){
        score = +1
    }else if(playerChoice == 'Paper' && MachineChoice == 'Rock'){
        score = +1
    }else if(playerChoice == 'Scissors' && MachineChoice == 'Paper'){
        score = +1
    }else {
        score = -1
    }
    return score;
}

function showResult(score, playerChoice, machineChoice) {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    if (score == -1){
        resultDiv.innerText = 'You Lose!'
    }else if(score == 0 ) {
        resultDiv.innerText = 'Ta3adol'
    }else {
        resultDiv.innerText = 'You Won!'
    }
    playerScoreDiv.innerText = `Your : Score ${globalScore['PlayerScore']}`
    handsDiv.innerText = `🧙🏻‍♂️${playerChoice}  vs  💻${machineChoice}`
}

function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const machineChoice = getMachineChoice()
    console.log({machineChoice})
    const score = getResult(playerChoice, machineChoice)
    globalScore['PlayerScore'] += score
    console.log({score})
    console.log(globalScore)
    showResult(score, playerChoice, machineChoice)
}

function playGame() {
    const actButtons  = document.querySelectorAll('.actButton')
    actButtons[0].onclick = () => console.log(actButtons[0].value)

    actButtons.forEach(actButton => {
        actButton.onclick = () => onClickRPS(actButton.value)
    })

    const endGameBtn = document.getElementById('endGameButton')
    endGameBtn.onclick = () => endGame(globalScore)
}


function endGame(globalScore){
    globalScore['playerScore'] = 0
    globalScore['machineScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
    console.clear()
}

playGame()