// function is a set of code that takes an argument and after processing those arguments returns an output. And this set of code can be called multiple times when needed

// Declaring a function

// function add(a,b){
//     return a + b;
// }

const val=add(1,3); //round bracket are used to call functions

// console.log(val);

let fn=add
console.log(fn(1,3));
if (false)
{// Example of a function accepting function as an argument

const sub = function(){
    return 'This will perform sub'
}
// This function prints 'return value' of other function
function fnAccepter(fn){
    console.log(fn());
}

fnAccepter(sub);
// This function returns 'Hi'
function sayHi(){
    return 'Hi'
}

fnAccepter(sayHi);

function add(){
    return 1+2;
}


fnAccepter(add);
}
// Example of a function returnin a function

function add(a,b){
    return a + b;
}

function fnReturner(){
    return add;
}


const adder=fnReturner();
const val1= adder(4,3);
console.log(add === adder);
console.log(val1);

console.log(adder(4,3));