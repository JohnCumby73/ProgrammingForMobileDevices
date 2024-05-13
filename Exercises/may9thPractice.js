/* 1. Write a function which accepts an array of numbers and returns the sum of all the EVEN numbers in the array.
Have the function use the reduce method to calculate the sum of even numbers. */

// **************************************************************
// const getSumOfArray = (numbers) => {
//     return numbers.reduce( (acc, current) => current % 2 == 0 ? acc + current : acc, 0)
// }
// console.log(getSumOfArray([1,2,3,4,5]));
// **************************************************************

/* 2. Create an array which represents a person's skills.
The first and second elements are the person's name. Th eremaining elements in the array are the person's skills.*/

// **************************************************************
// const mySkills = ["John", "Cumby", "Math", "Music Theory", "Java", "Guitar"]
// const arrayDeconstructor = (nameAndSkills) => {
//     const [firstName, lastName, ...skills] = nameAndSkills
//     console.log(firstName + " " + lastName);
//     for (const skill of skills) {
//         console.log(skill)
//     }
// }
// arrayDeconstructor(mySkills)
// ***************************************************************

/* 3. Create an array with the following values ["hello", "there", "how", "are", "you"].
Use the destructuring and the rest operator to store the first two values in variables and to store remaining 3 values in an array. */

// ****************************************************************
// const greeting = ["hello", "there", "how", "are", "you"]
// const arrayDeconstructor = (greetingWords) => {
//     const [word1, word2, ...restOfGreeting] = greetingWords;
//     console.log(word1);
//     console.log(word2);
//     console.log(restOfGreeting);
// }
// arrayDeconstructor(greeting);
// *****************************************************************

/* 4. Create two arrays.
The first array will have the numbers 1 up to 6 and the 2nd array will have the numbers 7 up to 15.
Use the spread operator to create a new array which includes the contents of the first two arrays. Console.log the new array.*/

// ******************************************************************
// const oneThroughSix = [1,2,3,4,5,6];
// const sevenThroughFifteen = [7, 8, 9, 10, 11, 12, 13, 14, 15];
// const combined = [...oneThroughSix, ...sevenThroughFifteen];
// console.log(combined);
// *******************************************************************

/* 5. Create an array with several numbers. Use the map method to create a new array where each value is the corresponding value in the original array with 10 subtracted.
Console.log the new array. */

// ********************************************************************
const simpleValues = [1,2,3,4,5,6,7,8,9,10];
const simpleValuesLessTen = simpleValues.map(num => num - 10);
console.log(simpleValuesLessTen);