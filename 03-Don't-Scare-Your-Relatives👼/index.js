const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
btn.addEventListener("click", fix)

function fix() {
  greeting.textContent = "☃️ Merry Christmas! 🎁"
  greeting.style.fontFamily = "'Mountains of Christmas', cursive"
  
}

