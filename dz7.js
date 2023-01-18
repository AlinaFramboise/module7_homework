//Задание 1.
function func (a){
    for (let a in flowers);
} 
const a={
    1:'rose',
    2:'tulip',
    3:'daffodil'
}
console.log (a)

//Задание 2.
function checkPropInObj (str, obj) {
    return (str in obj);
  }
  const flowers = {
    1: 'rose',
    2: 'tulip',
    3: 'daffodil'
  }
  console.log ("2" in flowers)
  console.log ("4" in flowers)

//Задание 3.
function func () {
    return Object.create(null);
 }
 console.log(func())


//Задание 4.
function Appliance(name, power) {
  this.name = name;
  this.power = power;
  this.isPlugged = false;
} 

Appliance.prototype.plugIn = function() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
}

Appliance.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power : 0;
}


const lamp = new Appliance('lamp', 20);
const laptop = new Appliance('laptop', 80);

console.log(lamp.getPowerUsed() + laptop.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + laptop.getPowerUsed());

laptop.plugIn();
console.log(lamp.getPowerUsed() + laptop.getPowerUsed());

//Задание 5.
class Appliance
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn()
  {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const lamp = new Appliance('lamp', 20);
const laptop = new Appliance('laptop', 80);

console.log(lamp.getPowerUsed() + laptop.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + laptop.getPowerUsed());

laptop.plugIn();
console.log(lamp.getPowerUsed() + laptop.getPowerUsed());