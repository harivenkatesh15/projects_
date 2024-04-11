const a=document.getElementById("val")
const b=document.getElementById("mytxt")
const c=document.getElementById("c-f")
const d=document.getElementById("f-c")
let x;

function ch(){
   
    if(c.checked){
        x=Number(a.value)
         x= x*9/5+32
         b.textContent=x
    }
    
    
    if(d.checked)
    {
        x=Number(a.value)
        x=(x-32)* (5/9)
        b.textContent=x
   }
}


