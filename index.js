

const top = document.getElementById("top")
const carousels = document.querySelectorAll(".carousel")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

let activeSlide = 0

btn1.addEventListener("click", () => {
    activeSlide = 0

    setActiveSlide()
} )

btn2.addEventListener("click", () => {
    activeSlide = 1

    setActiveSlide()
} )

btn3.addEventListener("click", () => {
    activeSlide = 2

    setActiveSlide()
} )

function setActiveSlide() {
    carousels.forEach(carousel => {
        carousel.classList.remove("active")
    })

    carousels[activeSlide].classList.add("active")
}

// let idx = 0

// let interval = setInterval(run, 2000)

// function run() {
//     idx++
//     changeText()
// }

// function changeText() {
    
// }