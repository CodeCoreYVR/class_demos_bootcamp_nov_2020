function wordCounts(string){
const splitedString=string.split(' ') 
// This will convert string to an array using ' ' as a spliting point
// splitedString=["this","is","this","and","that"]

const wordMap={};// initialng an empty object
for(let word of splitedString){
    if(wordMap[word]){ // this will check for undefined which is falsy value 
        // this is true part of if condition
        wordMap[word] +=1 // this will add 1 to previous value
        // 👆🏻 it equivalent to this 👇🏻 
        // wordMap[word]= wordMap[word] + 1;
    }else{// false part of if condition
        wordMap[word]=1 
        // wordMap["this"]=1
        // this will set (or assign) 1 to undefined
    }
}
return wordMap;

} //{"this":2, "is":1, "and":1, "that":1}

console.log(wordCounts("this is this and that"));