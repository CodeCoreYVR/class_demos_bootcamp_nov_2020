let nickName='Tommy';
let age=5;
let hobbies=['play with boxes','play with news papers'];

let dog={
    name:'Tommy',
    age:5,
    hobbies:['play with boxes','play with news papers']
}
//  Object are the reords od data organised as a collection of key value pairs. 
// They are really good at modelling real world objects

// We declare object using curly braces {} - but dont confuse your self with function body


const car={
    name:'Lisa',
    brand:'Tesla',
    makeYear:2020,
    model:'roadster',
    "full name": "Lisa Tank"
}

// Every key should be a string(with out quotes) and followed by a value seperated by:
// Each key value pair is seperated by other key value pair by a comma(,)
// In other programming languages they are also called dictionaries or hashes
// key name within an object should be unique
// key in an object are called properties of an object

// Accessing(Selecting) data from an object to be used in a code

// There are two methods to access the data

// 1. First method is a dot(.)notation

// Using variable to print name of a car (just to make more simple)
if(false){
let nameOfCar=car.name
console.log(`Name Of a Car from object : ${nameOfCar}`);
// Directly accessing value👇🏻 from car objec
console.log(`Name Of a Car from object : ${car.name}`);
}
// Exercise: Accesing age of dog
if(false){
dog.age
}

// 2. Second method of accessing value from object is via [] (square brackets)
if(false){
let makeYearOfCar=car["makeYear"];
console.log(`accesing value of object-car: ${makeYearOfCar}`)

// Access hobbies of a dog using square brackets

console.log(`Hobbies of a dog: ${dog["hobbies"]}`) // this will return entire array

console.log(`Hobbies of a dog: ${dog["hobbies"][0]}`) // this will return first element of an array

}
if (false){
// Why two seperate notation?

// console.log(car."full name"); 👈🏻We cannot do this, it will throw error

console.log(car["full name"]);

// First reason we can use spaces and some special character with [](square bracket) notation.

let a="model"
console.log(car[a]);
console.log(`Car: ${car.a}` ) //👈🏻 For Manpreet

// The variable name is a expression i.e. it results in a value

// The expression within the square brackets will evaluate into a value before being used as a string to select / access the key.
}
if(false){
// Accessing non-Existent property (Key)
console.log(car['lastName']) // undefined
// if we want to create a new in our object we will assign value to it
car['lastName']=1

console.log(car['lastName'])
// If we try to access the key / property which doesnot exsist in an object it will return an undefined
}
/* 
const car={ 👈🏻Rememebr this object is on the top
    name:'Lisa',
    brand:'Tesla',
    makeYear:2020,
    model:'roadster',
    "full name": "Lisa Tank"
}
let dog={👈🏻Rememebr this object is on the top
    name:'Tommy',
    age:5,
    hobbies:['play with boxes','play with news papers']
}
*/
if(false){
// Object.keys()
// A function to get all keys of a Object
console.log(Object.keys(car))


// Object.values()
// A function to get all the values of a Object
console.log(Object.values(car))


// Object.assign()
// A function used for merging the objects together
// Note: - the same key value from second object will overwrite the key value from first object
const mergedObject= Object.assign(car,dog);
console.log(mergedObject)
}
if(false){
// for in loop

let obj={ a:1, b:2,c:3, d:4}
// for..in loop will iterate over the keys of an object

for(let key in obj){
    // use objectName with [](square brackets)and a key in it to get value of respective key 
    console.log(`key:${key}, value:${obj[key]}`)
}
}

// Methods - A method is a property of a object whose value is a function

const petDog={
    name:'Ralph',
    age:10,
    bark:function(sound){ //👈🏻First way
        // On declaration of this object we have defined a bark method. 
        console.log(`${sound}`)
        return sound
    },
    bork:bork // 👈🏻Second way
}
// We can execute this method by selecting the property and appending parenthesis() - like any other function
petDog.bark('bark bark')
//  We can connect method with an object using different ways:
// 1. declaring a method inside an object
// 2. Declaring a method outside an object and then wirring it inside an object 
function bork(){
    console.log('booooork')
    return 'booooork'
}
petDog.bork();
// 3.Third way of connecting method to an object
petDog.oops=function(){
    console.log('ruh ruh')
    return 'ruh ruh'
}

petDog.oops();

console.log(Object.keys(petDog));