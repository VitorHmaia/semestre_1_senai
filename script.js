/* Botão responsividade */

var toggle_Bt=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

toggle_Bt.addEventListener("click",function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings:["Este é o meu portifólio", "Seja bem-vindo!"],
    typeSpeed:80,
    backSpeed:45,
    loop:true
})