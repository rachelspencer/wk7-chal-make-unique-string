
/* Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

Write your solution below:
*/
// Solution 1
const makeUnique1 = 'helloworld' // helowrd
const makeUnique2 = 'iwanttoclimbamountain' // iwantoclmbu

function makeUnique(makeUniqueString) {
    const uniqueString = [...new Set(makeUniqueString)]//.join('')
    return uniqueString
};

console.log(makeUnique(makeUnique1))

// BREAKDOWN
// function makeUnique(makeUniqueString) {
//     const step1 = [new Set(makeUniqueString)] //[ Set(7) { 'h', 'e', 'l', 'o', 'w', 'r', 'd' } ] = to iterate over makeUniqueString and add each element to a new set object.
//     const step2 = [...new Set(makeUniqueString)] //['h', 'e', 'l','o', 'w', 'r','d'] = to make the object an array
//     const step3 = [...new Set(makeUniqueString)].join('') //helowrd = to join the elements of the array to a string

//     const uniqueString = step3
//     return uniqueString
// };

// console.log(makeUnique(makeUnique1))

//Solution 2
function makeUniqueAgain(makeUniqueString) {
    let unique = '';
    for(let i = 0; i < makeUniqueString.length; i++) {
        if (unique.includes(makeUniqueString[i]) === false){
            unique += makeUniqueString[i]
        }
    }
    return unique
};

console.log(makeUniqueAgain(makeUnique2))