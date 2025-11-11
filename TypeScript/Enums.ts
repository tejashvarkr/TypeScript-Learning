//Enums
enum Enum{
    Up, 
    Down,
    Left,
    Right
};

console.log(Enum.Up);
let a=Enum.Down;
console.log(a);
let b=Enum[a];
console.log(b);

//Satisfies operator
//Helps in type checking for expressions
type color = "red"|"blue"|"green"
type def = [red:number,blue:number,green:number];
const colorpencil ={
    red:[1,2,3], blue:[1,2,2],green:"rgba(23, 231, 33, 0)",

}satisfies Record<color,string|def>;
const greens=colorpencil.green.toUpperCase();
console.log(greens);

//Keyof type operator
 interface details
 {
    name: string;
    age:number;
    
 }
 type keys = keyof details
const key:keys='name';
type arr={[n:number]:boolean};
const s:arr={ 0:true,1:false

}
console.log(s[0],s[1]);
for (let i in s)
{
 console.log(s[i]);
}

//Interfaces and Intersection type
interface contact{
    phno:number;
    tel:number;
}
interface details
{
    name: string;
    age: number;
}
type a = details & contact;
const person : a ={
    name: "Tejashvar K.R",
    age: 2,
    phno:123456789,
    tel:123456789
    
}
console.log(person.name);
for (let i in person)
{
    console.log(i + ": " + person[i as keyof typeof person]);
}

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

console.log(padLeft(2,"string with left padding of two spaces"));
function padRight(padding:number|string,input:string)

{
  if(typeof padding === "number")
  {
    return input + " ".repeat(padding) + padding + " "+ "spaces"; 
  }
  return input+padding;
}

console.log(padRight(2,"string with right padding of two spaces"));
