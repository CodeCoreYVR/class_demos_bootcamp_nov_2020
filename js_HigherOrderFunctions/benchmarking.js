function sumRecursive(arr){
    if(arr.length ===0){
        return 0;
    }else {
        return arr[0]+sumRecursive(arr.slice(1))
    }
}

function sumIteration(arr){
    let sum=0
    for(let element of arr){
        sum +=element;
    }
    return sum;
}

// arr=[1,2,3..4999]

const array=[];
let i=1;

while(array.length<5000){
    array.push(i);
    i++
}

console.time('a') //start a timer 'a'

sumIteration(array);

console.timeEnd('a') // print how mush time has passed since creating the 'a' timer

console.time('b');
sumRecursive(array)
console.timeEnd('b');