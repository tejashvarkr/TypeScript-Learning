//Generics
function generic<T>(value:T):T
{
    return value;
}
console.log(generic(2));

class Generic<T>
{
    values:T= {} as T;
    add!:(x:T,y:T)=>T;
    

}
let genericnumber=new Generic<number>();
genericnumber.values=0;
genericnumber.add= function(x,y)
{return x+y;};
console.log(genericnumber.add(2,3));

let generalgenericvariable:<T>(a:T)=>T = generic;

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;

//Generic Constraints
interface lengthmeasure
{
    length:number;
}
function measure<T extends lengthmeasure>(arg:T):T{
    console.log(arg.length)
    return arg;
}

class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Abc";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
console.log(createInstance(Lion).keeper.nametag);
createInstance(Bee).keeper.hasMask;
console.log(createInstance(Bee).numLegs)
