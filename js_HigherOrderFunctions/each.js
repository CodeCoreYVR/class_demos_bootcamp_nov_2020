arr=[1,2,3,4]
function forEach(arr,callback){
    // This is without an index
    // for(let element of arr){
    //     callback(element)
    // }

    for(let i=0; i< arr.length;i++){
        callback(arr[i],i)
    }
}
forEach(arr, function(val,index){
    console.log(`The Current element is ${val}`)
    console.log(`The Current Index is ${index}`)
})