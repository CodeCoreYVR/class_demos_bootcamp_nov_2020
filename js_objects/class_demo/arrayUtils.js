const ArrayUtils = {
    last:function(arr){
         return arr[arr.length-1]
    },
    first:function(arr){
        return arr[0]
    },
    take:function(arr,n){
        return arr.slice(0,n)
    }

};
// We can use objects to aorganise a bunch of functions that are related to each other like our ArrayUtils object
console.log(ArrayUtils.last([1,2,3,4,5]))
console.log(ArrayUtils.first([1,2,3,4,5]))
console.log(ArrayUtils.take([1,2,3,4,5],3))