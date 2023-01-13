let homeScore = 0
let guestScore = 0

function add1home(){
    homeScore+=1
    document.getElementById("homeScore").textContent = homeScore
}
function add2home(){
    homeScore+=2
    document.getElementById("homeScore").textContent = homeScore
}
function add3home(){
    homeScore+=3
    document.getElementById("homeScore").textContent = homeScore
}
function add1guest(){
    guestScore+=1
    document.getElementById("guestScore").textContent = guestScore
}
function add2guest(){
    guestScore+=2
    document.getElementById("guestScore").textContent = guestScore
}
function add3guest(){
    guestScore+=3
    document.getElementById("guestScore").textContent = guestScore
}
function newGame(){
    homeScore=0
    guestScore=0
    document.getElementById("homeScore").textContent = homeScore
    document.getElementById("guestScore").textContent = guestScore
}