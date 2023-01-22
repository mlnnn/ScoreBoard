let scoreHome = 0
let scoreGuest = 0


let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")



let scoreHomeBtn1 = document.getElementById("btn1Home")
let scoreHomeBtn2 = document.getElementById("btn2Home")
let scoreHomeBtn3 = document.getElementById("btn3Home")

let scoreGuestBtn1 = document.getElementById("btn1Guest")
let scoreGuestBtn2 = document.getElementById("btn2Guest")
let scoreGuestBtn3 = document.getElementById("btn3Guest")

let startNewGame = document.getElementById("new-game")

function add1Home() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function add2Home() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function add3Home() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function add1Guest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function add2Guest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function add3Guest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuestEl.textContent = scoreGuest
}