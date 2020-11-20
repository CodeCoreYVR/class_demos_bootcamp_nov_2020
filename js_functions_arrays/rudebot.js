function insult(name){
    // console.log(Math.floor(Math.random()*3)) Will generate random numbers between 0 and 3
    const randNum=Math.floor(Math.random()*3)
    if (randNum ===0){
        return `${name}, you doofus!`
    }else if (randNum ===1){
        return `${name}, your father smelt of elderberries!`
    }else{
        return `your mother was hamster, ${name}`
    }
}

console.log(insult('bob'));
console.log(insult('jon'));