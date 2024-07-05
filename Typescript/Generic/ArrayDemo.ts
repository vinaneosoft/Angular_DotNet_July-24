import { NeoEmployee } from "../Inheritance/SingleInheritance";

let array=[45,"pooja",67000,67,"Sonu",78000, true, false];
// crud operations on hetergenous array is not feasible
// array must be typesafe 

let array2=new Array();
array2.push(67)
array2.push("hema");

let salaryArray=new Array<number>(); // typesafe array
salaryArray.push(78000,78000,56000,34000,90000);
salaryArray.push(45600)
//salaryArray.push("Krupa");
 //Argument of type 'string' is not assignable to parameter of type 'number'.
/*Array<number>.push(...items: number[]): number*/
salaryArray.pop();


let ele=salaryArray[0] // indexed collection
salaryArray[0]=23000;

let nameArray=new Array<string>();
nameArray.push("kirti","Uma","Amar","Sindhu","kirti");
nameArray.pop();
//nameArray.push(67000);
/* Array<string>.push(...items: string[]): number */

/*  push(...items : T[]):number{

}

pop(): T | undefined
 */







let employees = new Array<NeoEmployee>();
employees.push(new NeoEmployee())
employees.push(new NeoEmployee())
employees.push(new NeoEmployee())
employees.push(new NeoEmployee())
employees.push(new NeoEmployee())



interface ABC<T>{
    eid:T
}

class A implements ABC<number>{
    eid:number
}
class B implements ABC<string>{
    eid:string
}

let num=67;
let numObject=new Number(num);

let s1="hi";
let s2=new String("hello");

let demoarray=new Array<Number>();