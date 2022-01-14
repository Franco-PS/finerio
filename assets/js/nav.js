const barrBox= document.getElementById('barr__box');
let barrNav= document.getElementById('barr__nav');
let iconMenu= document.getElementById('iconMenu');
let navBox= document.getElementById('nav-box');
// let navShow= document.querySelector('.barr__nav-show');

function data(elem){
    if(elem == iconMenu){
        barrNav.classList.toggle('barr__nav-show')
    }else if(elem == navBox){
        barrNav.classList.remove('barr__nav-show')
    }
}

barrBox.addEventListener('click', e=>{
    elem= e.target;
    console.log(elem)
    data(elem);
})