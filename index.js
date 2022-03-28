let dressPressed = document.querySelectorAll('.bodycon-dress');

dressPressed.forEach(dress => {
  dress.addEventListener('mouseover', clickOutcome)
  dress.addEventListener('mouseout', clickOutcome2)
})

function clickOutcome () {
  this.classList.add("hovered")
}

function clickOutcome2 () {
  this.classList.remove("hovered")
}


function clicked (id) {
  let e = document.getElementById(id) 
  e.classList.add("hover");
}

function clicked2 (id) {
  let e = document.getElementById(id) 
  e.classList.remove("hover");
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".altered-links");

hamburger.addEventListener("click", ()=>
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))