// function loud(fn){
//     console.log(`Calling: ${fn.name}`)
//     let val=fn();
//     console.log(`Called: ${fn.name} and Returned: ${val}`)
//     return val;
// }


function loud(logFn,fn){
    logFn(`Calling: ${fn.name}`)
    let val=fn();
    logFn(`Called: ${fn.name} and Returned: ${val}`)
    return val;
}

function sayHi(){
    return 'Hi'
}

function sayBye(){
    return 'Bye'
}

loud(console.info,sayHi);
loud(console.log,sayBye);
