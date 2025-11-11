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

    