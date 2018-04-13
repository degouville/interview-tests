// QUESTION: Let say you have an Array with duplicate values,
// ...are would you return this Array without duplicates ?

// NOTE: let's make a randmon Array with duplicates
const myArrayWithDuplicates = [2, 3, 3, 10, 2, 5, 1]

// 1st: I'll use Set and create a set from the given array
// 2nd: Given that Set return an Object, I'll spread it into a new Array
// BONUS: now I just want to get this array sorted so I use the .sort function
// ... but 10 came before 2 so I fix sort with (a, b) => a - b as callback
const asc = (a, b) => a - b // inverse should be `const desc = (a, b) => a + b`
const removeDuplicate = arr => [...new Set(arr)].sort(asc)

// NOTE: Test the removeDuplicate() function
const myArrayWithoutDuplicates = removeDuplicate(myArrayWithDuplicates)

console.log(myArrayWithoutDuplicates) // you'll get [ 1, 2, 3, 5, 10 ]
