// const top = document.getElementById("top")
const carousels = document.querySelectorAll(".carousel")
const btns = document.querySelectorAll(".top-btn")
const imgs = ["constr 2.png", "bg-img.jpg", "concrete.jpg"]
const carouselDiv = document.getElementById("carousels")

let index = 0

let interval = setInterval(run, 3000)


btns.forEach(btn => {

    let btnId = btn.id
    btn.addEventListener("click", () => {
        clearInterval(interval)
        removeActiveBtn()
        btn.classList.add("active")

        index = btnId.charAt(btnId.length - 1)
        setActiveSlide(index - 1) 
        // resetInterval()
    })
})

// function resetInterval() {
//     clearInterval(interval)
//     interval = setInterval(run, 2000)
// }

function removeActiveBtn() {
    btns.forEach(btn => {
        btn.classList.remove("active")   
    })
}


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


function run() {
    index++
    if(index > carousels.length - 1) {
        index = 0
    }

    removeActiveBtn()
    btns[index].classList.add("active")
    setActiveSlide(index)
}

