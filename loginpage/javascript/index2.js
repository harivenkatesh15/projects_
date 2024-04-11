

function ch()
{
    const a=document.getElementById("myin").value
    const b=document.getElementById("txt")
    const c=document.getElementById("images")
    const d=[]
    const e=[]
    for(i=0;i<a;i++){
    const x=Math.floor(Math.random()*6)+1
    console.log(x)
    d.push(x)
    e.push(`<img src="Dice-${x}.png" alt="" id="pic1">`)
    console.log(e)
  }
    c.innerHTML=e.join("");
    
}
