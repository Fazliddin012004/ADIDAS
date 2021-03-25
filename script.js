const con = document.querySelector('.container');
const card = document.querySelector('.card');
const link = document.querySelector('a');
const cir = document.querySelector('.circle');
const img = document.querySelector('img');
const head = document.querySelector('h3');
const par = document.querySelector('p');
const btn = document.querySelector('.btn-box');

// /3 d mouse move effect
con.addEventListener('mousemove', e =>{
    const x = (window.innerWidth / 2 - e.pageX) / 20;
    const y = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    // card.style.transition = `0`
    img.style.transform = "translateZ(100px) rotate(30deg)"
    link.style.transform = "translateZ(70px)"
    par.style.transform = "translateZ(30px)"
    cir.style.transform = "translateZ(25px) scale(0.8)"
    head.style.transform = "translateZ(50px)"
    btn.style.transform = "translateZ(40px)"
}) 
con.addEventListener('mouseenter', () => {
    card.style.transition = '0s';
})

con.addEventListener('mouseleave', e =>{
    
    card.style.transition = `0.5s`
    card.style.transform = `rotateX(0) rotateY(0)`;

    img.style.transform = "translateZ(0px) rotate(0deg)"
    link.style.transform = "translateZ(0px)"
    par.style.transform = "translateZ(0px)"
    cir.style.transform = "translateZ(0px) scale(1)"
    head.style.transform = "translateZ(0px)"
    btn.style.transform = "translateZ(0px)"
}) 