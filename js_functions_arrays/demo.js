//  Declaring a function
// word 'function' is a reserved word to declare a function
// add : is the name of a function
// {- Open Curly braces defines the begining of the body of function
//  }- Close curly brace define the end of the body
// return gives the ouput from the function and it exits from the function 

if(false) {
    function add(a,b){
        const total=a+b;
        console.log('My name 1')
        if (true){
        return total;}
        else{
        return total + total} // This will not be processed 
    }


//  Calling a function
// we call a function by its name with ()- round brackets:
// To execute a function we need to call it with name and round brackets
console.log(add()); // NaN
console.log(add(5,6))
console.log(add(5,7))
console.log(add(5,8))
console.log(add(5,9))

}

// This is the second way of declaring a function
let sum = function(a,b){
    const total=a+b;
    return total;
}
// Calling function remains same
console.log(sum(1+4,2)) // We can pass expressions as an argument inside a bracket

console.log(sum(sum(2,3),sum(4,5)));

//  if function thatis returning nothing will return undefined

function withNoReturn(a,b){
    total=a+b
}
console.log(withNoReturn(5, 7))