const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".img")
const bottom = document.querySelector(".bottom")

let slideNumber = 1
let i = 0
const legnth = images.length

const nextSlide = ()=>{
    if (slideNumber < legnth){
        slider.style.transform = `translateX(-${slideNumber * 800}px)`;
            slideNumber++;}
}


const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
}

const firstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}


const lastSlide = ()=>{
    slider.style.transform = `translateX(-${(legnth-1)*800}px)`;
    slideNumber = legnth;
}



right.addEventListener("click",()=>{
    slideNumber < legnth ? nextSlide() : firstSlide()
    
})
  

left.addEventListener("click",()=>{
    slideNumber > 1 ? prevSlide() : lastSlide()
    
})

for(let i=0; i<legnth; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
button[0].style.backgroundColor = "white"

buttons.forEach((button,i) => {
    button.addEventListener("click",()=>{
    slider.sytle.transform = `translateX(-${i*800}px)`
    })    
    })
