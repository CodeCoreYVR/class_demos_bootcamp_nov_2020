function toArray(obj){
    let arrayFromObject=[];
    for (let key in obj){
        arrayFromObject.push([key,obj[key]])
    }
    return arrayFromObject
}

console.log(toArray({a:1, b:2,c:3}));