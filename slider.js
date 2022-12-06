const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".img")

let slideNumber = 1


right.addEventListener("click",()=>{
    if (slideNumber < images.length){
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
        slideNumber++;
    }else {
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }

}
)

left.addEventListener("click",()=>{
    slider.style.transform = `translateX(+800px)`;
}
)

