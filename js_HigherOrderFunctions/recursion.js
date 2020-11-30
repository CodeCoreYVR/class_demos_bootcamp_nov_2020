// Recursion is when you do action over and over again

// Recursive function is a function that call itself again and again and again and again

// 👆🏻First requirement of a recursive function is it calls itself
// Second requirement of a recursive function is it has some tereminating condition
if(false){
arr=[1,2,3,4,5]

function sum(arr){
    if(arr.length ===0){
        return 0;
    }else {
        return arr[0]+sum(arr.slice(1))
    }
}

 console.log(sum(arr));

}
if(false){
// Recursive Factorial

function factorial(n){
    if(n===1){
        return n; // n=1
    }else{
        return n * factorial(n-1);
    }

}
// 4 * 3 * 2 * 1
console.log(factorial(4));//24
}


function reverse(str){
    if(str.length===0){
        return ""
    }else{
        return str[str.length-1]+reverse(str.slice(0,-1));
    }
}
// o+l+l+e+h
console.log(reverse("hello"));

// Any Recursion solution can be solved iteratively and vice versa
// This solves the problem elgantly
// Recursion is slower than iterations
// Big O notation is at maximum when we use recursion