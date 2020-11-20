let fruit1='apple';
let fruit2='banana';
let fruit3='grapes';

// Arrays are collection of ordered data
// They are denoted / Defined by square brackets
// Each value inside an array is known as elements
// Elements inside an array is separated by , 
// index/ address of element in an array starts from zero
//  Array can store any datatype
if(false){

let arrFruits=['apple','banana','grapes']
            //   0      1          2 

['John','Sheela','Naveed','Don'] // This is an array of string elements.

// I can have elements of different data type in an array
['John',5,true,'M']

[[1,2],2,3,[3,[5,6,[7,8]]]] // Array with in array
}

const arr=[1,2,3,4,5]
if(false){console.log(arr.length)
console.log([].length)
console.log([undefined, undefined].length)   
// undefined is a value, which denoted no value   
}
// nameOfArray[index] -- To Access value inside an array
if(false){
console.log(arr[0]); //1
console.log(arr[4]); //5
console.log(arr[-1]); // undefined
console.log(arr[5]); // undefined because that index has no element stored

console.log(arr[arr.length-1]) // This will give us the last element in the index
}
if(false){
// arr.concat() - This will combine an array with new array and will return an array which is combination of both , without changing old array
let newArr=arr.concat(['a','b','c']) // Here new array is formed after concat, but original array is not changed
console.log(newArr);
console.log(arr);
}

// Slcing an Array
// const arr=[1,2,3,4,5] 👈🏻 Remember we have this array on the top of this file
if(false){
console.log(arr.slice(0)) // This will return a complete array

let slicedArray1=arr.slice(0,2);
// First argument is the index of where to start 
// Second Argument is the index where to stop keeping values
console.log(slicedArray1); //[ 1, 2 ]
console.log(arr);//[ 1, 2, 3, 4, 5 ]
// const arr=[1,2,3,4,5] 👈🏻 Remember we have 
let sliceArray2=arr.slice(1,3);
console.log(sliceArray2); // [2,3]

let sliceArray3=arr.slice(-2);
console.log(sliceArray3);//[ 4, 5 ] 👈🏻 It returned last two elements
}
if(false){
// Joining of an Array
// const arr=[1,2,3,4,5] 👈🏻 Remember we have 

let joinArray1=arr.join('|')
console.log(joinArray1); // Returned a string with all elements joined together with: 1|2|3|4|5

// Joining with ''
let joinArray2=arr.join('');
console.log(joinArray2) //'12345' returned elements without any character in middle
}

// const arr=[1,2,3,4,5] 👈🏻 Remember we have this on the top of this code

// Mutation
// Mutation is basically changing the array itself instead of returning a new array with changes.

// Example Of Mutation
if(false){
console.log(arr) //👈🏻 before mutation
arr[0]=5;
console.log(arr) // 👈🏻after mutation
}
if(false){
// .shift()

// it removesthe first element from the array and return that value
console.log(arr) //👈🏻 before mutation       
let returnedValue=arr.shift()

console.log(returnedValue) // 5 
console.log(arr) // 👈🏻after mutation
}
// .pop() // Removes the last element of an array andreturn that element-value
if(false){
// const arr=[1,2,3,4,5] 👈🏻 Remember we have this on the top of this code

console.log(arr) //👈🏻 before mutation    
let returnedValue=arr.pop();
console.log(returnedValue);   
console.log(arr) // after pop()on array
}

if(false){
// .unshift() - Adds an element in front of an actual array and returns the length of mutated array(actual array)
// const arr=[1,2,3,4,5] 👈🏻 Remember we have this on the top of this code
console.log(arr); // actual array before .unshift
console.log(arr.unshift('a'));// it will return a length od an array
console.log(arr); // This will display mutated array after .unshift()

}

if(false){
// const arr=[1,2,3,4,5] 👈🏻 Remember we have this on the top of this code
console.log(arr) // before .push() on arr
console.log(arr.push('b'));// it returns a length of actual array(mutated array)
console.log(arr)//this displays the array (arr) after mutation 
}
// Documentation about Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

if(false){let a //check either it is array or not - how do I check ?

// Array.isArray() 👈🏻 We use this to check value is Array or not
// Array.isArray('a')//false
// Array.isArray([])//true
// Array.isArray(arr)//true
// Array.isArray({}) // false
}
if(false){
// .includes()- is used to check either that element is present in that array or not?
let val=arr.includes('a') // false
console.log(val);
[1,2,3,4].includes(1) // true
[1,2,3,4].includes('a')//false
}

const alphabets=['a','b','c','d']
if(false){
for(let i=0;i<alphabets.length;i++){
    console.log("index",i, "value",alphabets[i]);
}
}
// use for .. of loop which will iterate over the values of the array and stop automatically at the end of an array
// This for of loop is made specifically for iterables such as arrays
// iterable are types in javascript which can be iterated 
for(let value of alphabets){ 
    console.log("value:", value);
}