//Functions
function print(s:string)
{
    console.log(`s is ${s}`);
}
function printer(fn:(a:string)=>void)
{
 fn("a letter of the alphabet");
}
printer(print);
//Understanding how a function is passed as a parameter , and basic structure of function with return value type annotated , and also passing parameter.

//Using type
type functions = (b:string)=>void;
function printers(fns:functions)
{
    fns("Hello there!");
}
//Call Signature and Construct Signature
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);

type SomeConstructor = {
  new (s: string): BooleanClass;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}


class BooleanClass {
  constructor(s: string) {
    return s.length > 4; 
  }
}


const result = fn(BooleanClass);
console.log(result);

interface measure
{
    length: number,


}
interface Rectangle extends measure {
 breadth:number;
 calculate_area(length:number, breadth:number):void
 
}
let rectangle:Rectangle={
    length:10,
    breadth:12,
  calculate_area(length,breadth){
    console.log(length*breadth)
  },
};
rectangle.calculate_area(rectangle.length,rectangle.breadth);
