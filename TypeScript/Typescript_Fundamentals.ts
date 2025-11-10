//Typescript Fundamentals

//Type conversion is an implicit or explicit conversion , type coercion is automatic 
let a="1";
let b=25;
console.log(a+b);

//Type definition in parameters of function
function calculate (a: number,b: number,c: number): number{
return a*b*c;
}
calculate(1,2,3);
console.log(calculate(1,2,3));

//Understood installing and setting up typescript , noted the commands like tsc ,tsc --init, ts-node

//Understanding Typescript Datatypes

//Number, string , boolean are three common datatypes used 

//Use of any 
let obj: any;
obj="foobar"+2;
console.log(obj);
//Noimplicitany will avoid type checking further more
let myname="Tejashvar"; //Direct Association to the type of the string
console.log(myname);

//Use of unknown datatype that typescript provides
// function add(a:unknown)
// {
//     a.subtract();
// }

function nullundefined(x: null | string)
{
if(x===null)
{
    console.log("The value of x is null");
}
else{
    console.log("The value of x is"+x);

}
}

async function promise():Promise<number>
{

    return 9;


}

const floor=["1","2","3"];
floor.forEach(function (s){
    console.log("Floor"+ s.toUpperCase());
});

function adds(a:any)
{
    a.subtract();

}

function subtract()
{
 return ;
}

//Return type and parameter type checking
function name(name:string):string{
 console.log(`${name}`);
 return name;
}
name("Tejashvar K.R");

//Understanding Functions with returning never datatype , should not have a reachable point.
 
//   function retur(message:string) :never {
//   throw new Error(message);
// }

function object(pt:{ x:number;y:number

})

{
   console.log(`${pt.x}, ${pt.y}`);
}

object({x:1,y:3});

//Narrowing and Union
function parameter(x:string | number)
{
    if(typeof x === "string")
    console.log(x.toUpperCase());
else{
    console.log(x);
}
}

//Type aliases
type a= string;
type b= string|null;
//Interfaces are also methods for type aliases

interface objectinit{
    x:number;
    y:number;
}
function coordinates(point:objectinit)
{
    console.log(point.x);
    console.log(point.y);

}
//As type
let someValue: any = "Hello, I am Tejashvar!";
let strLength: number = (someValue as string).length;

console.log(strLength);
 
//Not null assertion

let names: string | null = "Something";

let nameLength = names!.length;
let namelengths=names?.length?? 0
console.log(nameLength)
console.log(namelengths);
    
//Tuples
type tuple=[string,number];
//We can use readonly , const , to make it immutable and not assign to mutable datatypes like number,etc
type tuples=readonly[string,number]
let tuplesconst=[1, "blue"] as const; 
//We can also use interfaces for defining tuples
interface tupledef
{
    length:0;
    0:number;
    1:string;
}

//Tuples can be with rest parameters as well
type tuplerest=[string, ...string[],number]; 


