const body = document.getElementById("body")
const greeting = document.getElementById("greeting")

const christmasBtn = document.getElementById("christmas")
christmasBtn.addEventListener("click", christmassify)

const snowBtn = document.getElementById("snow")
snowBtn.addEventListener("click", snowify)

function christmassify() {
  body.classList.remove("snow");  
  body.classList.add("christmas");
  greeting.innerHTML = `🎅Merry Christmas!`
}

function snowify() {
  body.classList.remove("christmas");
  body.classList.add("snow");
  greeting.innerHTML = `Let it Snow! ☃️`
}

