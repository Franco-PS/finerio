let sliderContent= document.getElementById("slider__block");
let sliderBloque= document.querySelectorAll(".container-slider");
let sliderBloqFirst= sliderBloque[0];
// console.log(sliderBloqFirst);
sliderContent.insertAdjacentElement('beforeend',sliderBloqFirst);
sliderBloque= document.querySelectorAll(".container-slider")[0];
// sliderBloqFirst= sliderBloque[0];
// console.log(sliderBloque);

function Next(){
    let sliderBloque= document.querySelectorAll(".container-slider")[0];
    sliderContent.style.marginLeft= "-100%";
    sliderContent.style.transition= "all 5s"
    setTimeout(()=>{
        sliderContent.style.marginLeft= "0";
        sliderContent.style.transition= "none";
        sliderContent.insertAdjacentElement('beforeend',sliderBloque);
        // sliderContent.style.marginLeft= "0";
    },5000)
}
// setInterval(function(){
    
//     Next();
// }, 6000)