// let navShow= document.querySelector('.nav__box-show');

const barrBox= document.getElementById('barr__box');

function data(elem){
    let barrNav= document.getElementById('nav__box');
    let iconMenu= document.getElementById('iconMenu');
    let navBox= document.getElementById('nav__box-btn');
    let linkSubNav= document.querySelectorAll('.nav__linkBox');
    
    let navSubBox= document.querySelectorAll('.box__subMenu');
    if(elem == iconMenu){
        barrNav.classList.toggle('nav__box-show');
    }else if(elem == navBox){
        barrNav.classList.remove('nav__box-show')
    }else if(elem == linkSubNav[0]){
        console.log(linkSubNav[0]);
        navSubBox[1].classList.remove('box__subMenu-1');
        console.log(navSubBox[1])
        navSubBox[0].classList.toggle('box__subMenu-0');
    }else if(elem == linkSubNav[1]){
        console.log(linkSubNav[1]);
        navSubBox[0].classList.remove('box__subMenu-0');
        console.log(navSubBox[0])
        navSubBox[1].classList.toggle('box__subMenu-1');
        }
}

barrBox.addEventListener('click', e=>{
    elem= e.target;
    // console.log(elem)
    data(elem);
})