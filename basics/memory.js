//in javascript two types of memory is used
//1. Stack(for primitives) - here copy of variables is passed  
//2. Heap (for non-primitives) - here reference of variables i.e. actual value is passed

let user1="abc"
let user2 = user1
console.log(user2)

user2="xyz"
console.log(user1);
console.log(user2);

let client1={
    name: "one",
    age: 21
}
let client2=client1
client2.name="two"
console.log(client1.name);
console.log(client2.name);

