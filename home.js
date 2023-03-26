let asme = document.getElementById('asme');
let b2 = document.getElementById('b2');
let stars = document.getElementById('stars');
let text = document.getElementById('text');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    asme.style.left = value* -2+'px';
   // asme.style.top = value* 1+'px';//new additon
    b2.style.top = value* 1+'px';
    stars.style.top = value* 1+'px';
    text.style.marginTop = value* 2.5+'px';
})