// No 1
const input: number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(input + " x " + i + " = " + input * i);
}

// No 2

const word: string = "zaramaraz";
const reverse: string = word.split("").reverse().join("");

if (word != reverse) {
  console.log(`not palindrome`);
} else {
  console.log(`palindrome`);
}

// cara 2
const word1: string = "zaramaraz";
const isPalindrome: boolean = word1 === word1.split("").reverse().join("");
console.log(isPalindrome);

// No 3
let centimeter: number = 100000;

if (centimeter) {
  console.log(`${centimeter / 100000} kilometer`);
}

// No 4
const money: number = 100000;
console.log(`Rp. ${money.toLocaleString()},00`);

// cara 2
const harga: number = 10000000;
const result: Intl.NumberFormat = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

console.log(result.format(harga));

// No 5

const search: string = "Hello World";
const findKata: string = "ell";
const result3: string = search.replace(findKata, "");

console.log(result3);

// No 6

const inputString: string = "Hello World";
const words: string[] = inputString.split(" ");

console.log(words);

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

// No 7
const inputString2: string = "The QiunjnakJNKJjk jkbnkjnknakndnjjnjkb";
let swappedString: string = "";

for (let i = 0; i < inputString2.length; i++) {
  if (inputString2[i] === inputString2[i].toUpperCase()) {
    swappedString += inputString2[i].toLowerCase();
  } else {
    swappedString += inputString2[i].toUpperCase();
  }
}

console.log(swappedString);

// No 8
const number1: number = 42;
const number2: number = 17;

const largest: number = Math.max(number1, number2);
console.log(`the largest number is ` + largest);

// No 9
const num1: number = 42;
const num2: number = 27;
const num3: number = 18;

const smallest: number = Math.min(num1, num2, num3);
const largest2: number = Math.max(num1, num2, num3);
const middle: number = num1 + num2 + num3 - smallest - largest2;

console.log(`${smallest} ${middle} ${largest2}`);

// if (num1 < num2 && num2 < num3) {
//   console.log(num3, num2, num1);
// } else if (num1 < num2 && num3 < num2) {
//   console.log(num2, num1, num3);
// } else if (num2 < num1 && num1 < num3) {
//   console.log(num2, num1, num3);
// } else if (num2 < num1 && num3 < num1) {
//   console.log(num1, num2, num3);
// } else if (num3 < num1 && num1 < num2) {
//   console.log(num2, num1, num3);
// } else {
//   console.log(num3, num2, num1);
// }

// No 10

const inputan: any = "hello";
if (typeof inputan == "string") {
  console.log(1);
} else if (typeof inputan == "number") {
  console.log(2);
} else {
  console.log(3);
}
// No 11

// const change: string = "An Apple A day keeps the doctor Away".toLowerCase();
// const replaceWords: string = "a".toLowerCase();
// let modifiedString: string = "";

// for(let i = 0; i < change.length; i++){}
