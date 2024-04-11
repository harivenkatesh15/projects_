var text = document.getElementById('text');
var leaf = document.getElementById('leaf');
var hill1 = document.getElementById('hill1');
var hill4 = document.getElementById('hill4');
var hill5 = document.getElementById('hill5'); 

window.addEventListener('scroll', ()=>{
    var value=window.scrollY;

    text.style.marginTop=value*2.5+'px';
    leaf.style.top=value*-1.5+'px';
    leaf.style.left=value*1.5+'px';
    hill5.style.left=value*1.5+'px';
    hill4.style.left=value*-1.5+'px';
    hill1.style.top=value*1.5+'px';
})