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

