"use strict";

const arr = [1, 21, 30, 5, 6, 7, 8, 4, 11];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} в масиві ${arr}`);
});