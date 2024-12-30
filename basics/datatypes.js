//datatype are divided into 2 types:
//1. primitive
//   7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// javascript is dynamically typed which means that datatype of variables is decided at runtime
// and we dont need to mention their datatype while declaring the variable

const score=100;
//console.log(typeof score);

let userName="xyz";

const isLoggedIn=false

const value=null

let userEmail;                             //when value is not assigned it becomes undefined
let userEmail2=undefined;

userName="abc"
//console.log(userName);

const id=Symbol("123");
//console.log(id);
const anotherId=Symbol("123");
//console.log(anotherId);

//console.log(id===anotherId);     //false

const bigNumber=1234567891876652n;                 //by placing n at the last of a number makes it bigInt
//console.log(typeof bigNumber);


//2. Reference (non primitive)
// Array, Object, Functions

const languages=["python","java","javascript"];
//console.log(languages);
console.log(typeof languages);      //object


let myObj={
    personName: "xyz",
    age: 21
}
console.log(typeof myObj);
//console.log(myObj)                //object

let myFunction=function(){
    console.log("heloo..");
    
} 
console.log(myFunction);
console.log(typeof myFunction);     //function (function object)     

