function allOccurencesOf(char,array){
    let count=[];
    
    for (let i=0; i< array.length;i++){
        let charCount=0;
        for (value of array[i]){
            if(value === char){
                charCount++
            }
        }
        count.push(charCount)
    }
    return count;
}
console.log(allOccurencesOf('l',["hello","world"]))
console.log(allOccurencesOf('h',["hello","hi"]))