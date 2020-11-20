if(false){
// const - if we declare a variable with const we cannot change the value
const a=123
a=456
// if we declare an array with const we can still change the elements inside array
const arr=[1,2,3,4,5]
arr[0]=3
[ 3, 2, 3, 4, 5 ]
}
if(false){
    let b= 456
    b= 789 // we can change the value of variable declared with let
    let arr1=[1,2,3,4,5]
    arr1[0]=5 // element will be changed to 5
    arr1.shift() // return 5 as first element
}

if(false){// this is start of block
let i= 'hello'
console.log(i); //this will print value of i because it is inside a block of declaratio
}//this is end of clock
//console.log(i); // this will not print value of i
if(false){
{
let j="hello";
console.log(j);// this will print
}

console.log(j);// this will not print value of j
}
if(false){
let b='ball'; // declared outside the block
{
    console.log(b) //if the variable declared outside the block is being accessed inside a block it will work without throwing an error
}
}

if(true){
    var i='I am from var'
}
console.log(i)

// Shadowing 
let c="cat";
{
    let c="dog"
    console.log(c)
}

console.log(c)