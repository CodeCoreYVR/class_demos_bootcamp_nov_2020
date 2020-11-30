const strings=["a","b","c","d"]

// .map provided by Javascript

// const repeat= (str,index)=>{
//     return str.repeat(index)
// }

// const rr=strings.map(repeat);

// console.log(rr);

// Custom Map

function ourMap(arr, callback){
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(callback(arr[i],i))
    }
    return newArr;
}

const result=ourMap(strings,function(val,index){
    return val.repeat(index);
})

console.log(result)