const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".img")
const legnth = images.length

let slideNumber = 1

const nextSlide = ()=>{
    if (slideNumber < legnth){
        slider.style.transform = `translateX(-${slideNumber * 800}px)`;
            slideNumber++;}
}

const firstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

right.addEventListener("click",()=>{
    slideNumber < legnth ? nextSlide() : firstSlide()
    
})


