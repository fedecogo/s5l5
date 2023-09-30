window.addEventListener('scroll',function(){
    let navbar = document.getElementsByClassName('nav')[0];
let divbianco = document.getElementsByClassName('tred_card')[0]
let button = document.getElementsByTagName('button')[0];
let rect = divbianco.getBoundingClientRect()
let sbianca = rect.top > 0 && rect.bottom <= this.window.innerHeight;
let navpuntopiùalto = window.scrollY <=400;

if (sbianca || navpuntopiùalto ){
    navbar.style.backgroundColor = '#ffc017 ';
    button.style.backgroundColor = 'black';
} else {
    navbar.style.backgroundColor = 'white';
    button.style.backgroundColor = 'green';
}
})