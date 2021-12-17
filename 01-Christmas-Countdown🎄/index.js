const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const christmas = 25
    const today = new Date().getDate();
    const remainingDays = christmas - today;
    
    countdownDisplay.innerText = remainingDays;
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.