let department;// no type decided
department=123; //number  
console.log(typeof department);
department="LD"; // string   
console.log(typeof department);
department=true; // boolean  
console.log(typeof department);
var address;
const pie=3.142;

//strict types
let empId:number   // type annotations, type is known in prior
empId=123;
console.log(typeof empId);
//empId="3445";

let companyName:string;
companyName="Neosoft";
console.log(typeof companyName);
//companyName=0;

let dcode:any;
dcode=23;
dcode="LD";

let id:number | string;
id="NS123";
id=123
//id=true;

let ename="Poonam";  //string
// ename=890;


function test() {
    console.log("test function");
    return 0;
}
function test1():void {
    console.log("test1 function");
   // return 0;
}
function test2():number{
    //return "hello";
    return 78;
}