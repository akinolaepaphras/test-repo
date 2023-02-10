// const top = document.getElementById("top")
const carousels = document.querySelectorAll(".carousel")
const btns = document.querySelectorAll(".top-btn")
const imgs = ["constr 2.png", "aquarium.jpg", "concrete.jpg"]
const carouselDiv = document.getElementById("carousels")




btns.forEach(btn => {
    let btnId = btn.id
    btn.addEventListener("click", () => {
        let index = btnId.charAt(btnId.length-1)
        setActiveSlide(index-1) 
    })
})


function setActiveSlide(activeSlide) {
    carousels.forEach(carousel => {
        carousel.classList.remove("active")
    })
    carousels[activeSlide].classList.add("active")

    const bgStyle = `
        url('../img/${imgs[activeSlide]}') no-repeat center center fixed 
    `
    carouselDiv.style.background = bgStyle
    carouselDiv.style.backgroundSize = "cover"
}

// let idx = 0

// let interval = setInterval(run, 2000)

// function run() {
//     idx++
//     changeText()
// }

// function changeText() {
    
// }