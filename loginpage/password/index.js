/*const len=12;
const ap="qwertyuiopasdfghjklzxcvbnm"
const num="1234567890"
const sp="!@#$%^&*()_+-|?/"

let pass;
pass= ch(len,ap,num,sp)

function ch(len,ap,num,sp)
{
       const   
}

sum(display,4,2)
function sum(callback,x,y){
      let s=x+y
      callback(s);
}

function display(s){
       document.getElementById("mytxt").textContent=s
}
function car(model,make,year,country){
       this.model=model;
       this.make=make;
       this.year=year;
       this.country=country;
}

const car1= new car('mustang','ford',2024,"india")
const car2= new car("ciaz","maruthi",2023,"india")
console.log(car1)
console.log(car2.model)
*/
class details{
  
       constructor(name,age){
              this.name=name;
              this.age=age;
       }

       set name(nname){
              if(typeof nname==="string" && nname.length>0){
                     this._name=nname;
              }
              else{
                     console.error('enter a valid value')
              }
              
       }

       set age(nage){
              if(typeof nage==="number" && nage>0){
                     this._age=nage;
              }
              else{
                     console.error('enter a valid value')
              }
              
       }

       get name(){
              return this._name
       }
       get age(){
              return this._age
       }
}

const person1 = new details("ram",5)
console.log(person1._name)
console.log(person1._age)