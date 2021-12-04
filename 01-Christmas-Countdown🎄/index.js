const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    var today = new Date().getDay();
    var remainningDays = christmas - today;
    
    countdownDisplay.innerText = remainningDays;
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.