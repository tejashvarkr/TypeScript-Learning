//Typescript Narrowing with classes
class Person
{
    play()
    {
        console.log("He or she  can play");

    }
    study()
    {
       console.log("He or she can study");
    }
}
let person1 = new Person();
if(person1 instanceof Person )
{
    person1.play();
    person1.study();
}
else{
    console.log("It is not a person");
}

//typeof operator
let age:number = 20
if (typeof age === "number" && age>18){
    console.log("He or she can vote");
}
else{
    console.log("He or she cannot vote");
}

//Equality
let numstring : number | string = "abc";
let num:boolean|string|number= "abc";
if ( numstring === num )
    {
      console.log(numstring.toUpperCase());
      console.log(num.toLocaleString());
      console.log(num.toLowerCase());   
    } 
//Truthiness
//Coercing to boolean types , typescript has that functionality to give output 

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
                       

        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
                   

    }
  }
}
//in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void};
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();

}
const fish:Fish={
    swim:()=> console.log("Fishes can swim"),
}
const bird:Bird = { fly:()=>console.log("Birds can fly"),

}
move(bird);
move(fish);

//Type Predicates
type fishes = {
    swim:()=>void;
}
type eagles={
    fly:()=>void;
}
function categorisepet(pet:fishes|eagles):pet is fishes
{
  return (pet as fishes).swim !==  undefined
}
const eagless:eagles={
    fly:()=>console.log("Eagles can fly"),
}
categorisepet(eagless);
eagless.fly();


// Typeguards, and functions


