const resetButton = document.querySelector('#reset-button')
const resetLabel = document.querySelector('#num-resets')

const shootButton1 = document.querySelector('#teamone-shoot-button')
const  shotsTaken1 = document.querySelector('#teamone-numshots')
const goalMade1 = document.querySelector ('#teamone-numgoals')

const shootButton2 = document.querySelector('#teamtwo-shoot-button')
const shotsTaken2 = document.querySelector('#teamtwo-numshots')
const goalMade2 = document.querySelector('#teamtwo-numgoals')

let resetCount = 0

let playerOneShootCount = 0
let playerOneGoalCount = 0

let playerTwoShootCount = 0
let playerTwoGoalCount = 0

resetButton.addEventListener('click' , function(){
    resetCount += 1  

    playerOneShootCount = 0
    playerOneGoalCount = 0

    playerTwoShootCount = 0
    playerTwoGoalCount = 0

    resetLabel.innerHTML = resetCount
    shotsTaken1.innerHTML = playerOneShootCount
    goalMade1.innerHTML = playerOneGoalCount

    shotsTaken2.innerHTML = playerTwoShootCount
    goalMade2.innerHTML = playerTwoGoalCount
})

shootButton1.addEventListener('click' , function(){
    playerOneShootCount += 1
    playerOneGoalCount += Math.floor(Math.random() + 0.5)
    shotsTaken1.innerHTML = playerOneShootCount
    goalMade1.innerHTML = playerOneGoalCount
})

shootButton2.addEventListener('click' , function(){
    playerTwoShootCount += 1
    playerTwoGoalCount += Math.floor(Math.random() + 0.5)
    shotsTaken2.innerHTML = playerTwoShootCount
    goalMade2.innerHTML = playerTwoGoalCount

})