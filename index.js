var main = document.querySelector("main")
var navBtn = document.querySelector(".navBtn");
var ham1 = document.querySelector("#ham1");
var ham2 = document.querySelector("#ham2");
var ham3 = document.querySelector("#ham3");
let navOpen = false;

navBtn.addEventListener("click", () => {
    if(!navOpen){
        ham1.style.animation = "ham1 .4s linear forwards";
        ham2.style.animation = "ham2 .4s linear forwards";
        ham3.style.animation = "ham3 .4s linear forwards";
        navOpen = true;
    } else {
        ham1.style.transform = "transform: translateY(4.5px) rotate(45deg)";
        ham2.style.transform = "transform: translateY(4.5px) rotate(45deg)";
        ham3.style.transform = "transform: translateY(4.5px) rotate(45deg)";
        ham1.style.animation = "hamClose1 .4s linear forwards";
        ham2.style.animation = "hamClose2 .4s linear forwards";
        ham3.style.animation = "hamClose3 .4s linear forwards";
        navOpen = false;
    }
    // main.style.left = "0px";
})