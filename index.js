let timeAtStart = new Date().toLocaleTimeString()
console.log("Start: " + timeAtStart)

let homeScoreText = document.getElementById("home-score-text")
let guestScoreText = document.getElementById("guest-score-text")
let homeScoreCount = 0
let guestScoreCount = 0
let guesth3 = document.getElementById("guest-h3")
let homeh3 = document.getElementById("home-h3")

function oneHomePoint() {
    homeScoreCount++
    homeScoreText.textContent = homeScoreCount
    highlightLeader()
    console.log("home point, score is now " + homeScoreCount)
}

function oneGuestPoint() {
    guestScoreCount++
    guestScoreText.textContent = guestScoreCount
    highlightLeader()
    console.log("guest point, score is now " + guestScoreCount)
}

function highlightLeader() {
    if (guestScoreCount == homeScoreCount) {
        guesth3.style.color = "gold"
        homeh3.style.color = "gold"
    }
    if (guestScoreCount > homeScoreCount) {
         guesth3.style.color = "fuchsia"
         homeh3.style.color = "crimson"
    }
    if (homeScoreCount > guestScoreCount) {
        homeh3.style.color = "fuchsia"
        guesth3.style.color = "crimson"
    }
    
}




