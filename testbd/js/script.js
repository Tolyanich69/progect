"use strict";

// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger
// }

// number = 6;
// logNumber(); debugger

function createCounter() {
    let counter = 0;
    
    const Myfunction = function() {debugger
        counter = counter + 1;debugger
        return counter;debugger
    };
    
    return Myfunction;
}
debugger
const increment = createCounter();
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);