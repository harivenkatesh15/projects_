var a=document.getElementById("ov")
var b=document.getElementById("pp")
var c=document.getElementById("butt")
c.addEventListener("click",function(){
    a.style.display="block"
    b.style.display="block"
})
var d=document.getElementById("canc")
d.addEventListener("click",function(){
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"
})

var e=document.querySelector(".container")
var f=document.getElementById("in1")
var g=document.getElementById("in2")
var h=document.getElementById("in3")
var ad=document.getElementById("add")
ad.addEventListener("click",function(){
    var ne=document.createElement("div")
    ne.setAttribute("class","content")
    ne.innerHTML=` 
    <h1 id="h">${f.value}</h1>
    <h3 id="hh">${g.value}</h3>
    <p>${h.value}</p>
    <button id="bt" onclick='del(event)'>Delete</button>`
    e.append(ne)
    a.style.display="none"
    b.style.display="none"

})

function del(event){
    event.target.parentElement.remove()
}