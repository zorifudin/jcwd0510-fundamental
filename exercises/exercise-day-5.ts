// No 1 arr = [12,5,23,18,4,45,32]
function maxMinAvg(arrayExample: number[]) {
  const min: number = arrayExample.sort((a, b) => a - b)[0];
  const max: number = arrayExample.sort((a, b) => b - a)[0];
  let sum = 0;
  for (const element of arrayExample) {
    sum += element;
  }
  const avg = sum / arrayExample.length;
  console.log(min);
  console.log(max);
  console.log(avg);

  return { min, max, avg };
}

let arrayExample: number[] = [12, 5, 23, 18, 4, 45, 32];
console.log(maxMinAvg(arrayExample));

// without function
const arrayExample1: number[] = [12, 5, 23, 18, 4, 45, 32];

const arrMin = Math.min(...arrayExample1);

const arrMax = Math.max(...arrayExample1);

const sumArr = arrayExample1.reduce((a, b) => a + b);
const jmlArr = arrayExample1.length;
const arrAvg = sumArr / jmlArr;

console.log(`lowest: ${arrMin}, highest: ${arrMax}, average ${arrAvg} `);

// No 2 ["apple", "banana", "cherry", "date"]
// const arrWord: string[] = ["apple", "banana", "cherry", "date"];

// let arrWordReplace = arrWord.splice(arrWord.length - 1, 0, "and");

// const arrWordReplace1 = arrWord.join(", ");

function concatenateWords(arrWord: string[]) {
  if (arrWord.length === 0) return "";
  if (arrWord.length === 1) return arrWord[0];

  const lastWord = arrWord.pop();
  return arrWord.join(",") + ", and " + lastWord;
}

let arrWord = ["apple", "banana", "cherry", "date"];
console.log(concatenateWords(arrWord));

// No 3 [5,3,1,7,2,6]
function secondSmallest(arrExample: number[]) {
  arrExample.sort((a, b) => a - b);
  return arrExample[1];
}

const arrExample1: number[] = [5, 3, 1, 7, 2, 6];
console.log(
  `second smallest number in this array is ${secondSmallest(arrExample1)}`
);

// No 4
const arrOne: number[] = [1, 2, 3];
const arrTwo: number[] = [3, 2, 1];
function resultOfCalculateTwoArray(
  bothOfTwoArray: number[],
  bothOfTwoArray1: number[]
) {
  let resultBothArray = [];
  for (let i = 0; i < arrOne.length; i++) {
    resultBothArray.push(arrOne[i] + arrTwo[i]);
  }
  return resultBothArray;
}

console.log(resultOfCalculateTwoArray(arrOne, arrTwo));

// No 5
const arrAddedOne: number[] = [1, 2, 3, 4, 5];
const arrAddedTwo: number[] = [1, 2, 3, 4, 5];

function addNumberInArray(addArray: number[], addNumber: number) {
  if (addArray.indexOf(addNumber) > -1) {
    return addArray;
  } else {
    return [...addArray, addNumber];
  }
  return addNumberInArray;
}
console.log(addNumberInArray(arrAddedOne, 5));
console.log(addNumberInArray(arrAddedTwo, 7));

// No 6 ["3", 1, "string", null, false, undefined, 2]

function sumAllNumber(mixedArray) {
  let sumMixedArray = 0;
  for (let i = 0; i <= mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
      sumMixedArray += mixedArray[i];
    }
  }
  return sumMixedArray;
}

const mixedArray = ["3", 2, "string", null, false, undefined, 2];
console.log(sumAllNumber(mixedArray));

// No 7
function insertIntoArray(maxSize: number, ...numbers: number[]) {
  let resultInsertToArray = [];

  for (
    let i = 0;
    i < numbers.length && resultInsertToArray.length < maxSize;
    i++
  ) {
    resultInsertToArray.push(numbers[i]);
  }

  return resultInsertToArray;
}

let maxSize = 5;
console.log(insertIntoArray(maxSize, 5, 10, 24, 3, 6, 7, 8, 9, 10));

// No 8
const arr1: number[] = [1, 2, 3, 4];
const arr2: number[] = [5, 6, 7, 8];

console.log(arr1.concat(arr2));

// cara lain
const mergerArr: number[] = [...arr1, ...arr2];
console.log(mergerArr);

// No 9
// const exampleDuplicateArray: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function findDuplicates(exampleDuplicateArray: number[]) {
  let count = {};
  let duplicates = [];

  exampleDuplicateArray.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  for (let num in count) {
    if (count[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

const exampleDuplicateArray = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(exampleDuplicateArray));

// No 10
function findDifference(exampleArr1: number[], exampleArr2: number[]) {
  let diff1 = exampleArr1.filter((num) => !exampleArr2.includes(num));

  let diff2 = exampleArr2.filter((num) => !exampleArr1.includes(num));

  return [...diff1, ...diff2];
}

const exampleArr1 = [1, 2, 3, 4, 5];
const exampleArr2 = [3, 4, 5, 6, 7];
console.log(findDifference(exampleArr1, exampleArr2));

// No 11
function filterPrimitives(arrPrimitives) {
  return arrPrimitives.filter((item) => {
    return (
      item === null || (typeof item !== "object" && typeof item !== "function")
    );
  });
}

let arrPrimitives = [1, [], undefined, {}, "string", {}, []];
console.log(filterPrimitives(arrPrimitives));

// No 12
// function sumOfDuplicates(arrDuplicatesValue) {
//   let count = {};
//   let resultOfDuplicates = 0;

//   arrDuplicatesValue.forEach((numberInArray) => {
//     count[numberInArray] = (count[numberInArray] || 0) + 1;
//   });

//   for (let numberInArray in count) {
//     if (count[numberInArray] > 1) {
//       resultOfDuplicates += Number(numberInArray) * (count[numberInArray] - 1);
//     }
//   }

//   return resultOfDuplicates;
// }

// let arrDuplicatesValue = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// console.log(sumOfDuplicates(arrDuplicatesValue));

// No 13
function rockPaperScissors(playerChoice: string) {
  const choices = ["rock", "paper", "scissors"];

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    return "Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}

console.log(rockPaperScissors("rock"));
