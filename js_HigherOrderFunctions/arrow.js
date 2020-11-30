if(false){
// Named Function
// function add(a,b){
//     return a+b;
// }

// Anonymous Function
// Method 1:
// const add=function(a,b){
//     return a+b;
// }
// // Method 2: This is known as arrow function

// const add=(a,b)=>{
//     return a+b;
// }

// // Or

// const add=(a,b)=>{a+b;}

// // Or

// const add= (a,b)=>a+b;

// // Incase I have one argument

// const arrowFunctionWithOneArgument=a=>a+a;
 }

// const bark=(name, sound='Woof!')=> `${name} barks ${sound}`

// console.log(bark('Tommy','Bark bark'));
// console.log(bark('Tommy'));

const bark=name=>`${name} barks 'Woof!'`
// Solution 1:
// const add=(a,b)=>{ return a+b; }
// Solution 2:
// const add=(a,b)=> a+b;


// Solution 1:
// const flip=(fn)=>{
//     return (a,b)=>{
//         return fn(b,a)
//     }
// }
// Solution 2:
// const flip=fn=>(a,b)=>fn(b,a)
// Step 1:
const V=(x)=>{
    return function(y){
        return function(z){
            return z(x)(y);
        }
    }
}

// Step 2:

const V=(x)=>{
    return (y)=>{
        return function(z){
            return z(x)(y)
        }
    }
}
// Step 3:

const V=(x)=>{
    return (y)=>{
        return (z)=>{
            return z(x)(y)
        }
    }
}

// Step 4:
const V=(x)=>{(y)=>{(z)=>{z(x)(y)}}}

// Step 5:

const V= x =>y =>z(x)(y);