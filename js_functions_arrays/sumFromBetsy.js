const sum=(arr)=>{
    let total=0;
    for (let x of arr){
        if(typeof x==="number"){
            total=total+x
        }
    }
    console.log(total)
}
sum([2,2,"A",2])