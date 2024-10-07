// No 1
const panjang2: number = 5;
const lebar2: number = 3;
const outputArea: number = panjang2 * lebar2;

console.log(outputArea);

// No 2
const parimeterLengthRectangle: number = 5;
const parimeterwidthRectangle: number = 3;
const parimeter: number =
  2 * (parimeterLengthRectangle + parimeterwidthRectangle);
console.log(parimeter);

// No 3
const radius: number = 5;
const pi: number = 22 / 7;
const diameter1: number = 2 * radius;
const circumference1: number = pi * diameter1;
const areaCircle: number = pi * radius * radius;

console.log(diameter1);
console.log(circumference1);
console.log(areaCircle);

// No 4
const sisi1: number = 80;
const sisi2: number = 65;
const areaOfTriangle: number = 180;
const outputOfTriangle: number = areaOfTriangle - (sisi1 + sisi2);
console.log(outputOfTriangle);

// No 5
const sumOfDays: number = 400;
const sumOfYears: number = Math.round(400 / 365);
const sumOfMonths: number = Math.round((400 % 365) / 30);
const sumOfDays1: number = Math.round((400 % 365) % 30);

console.log(`${sumOfYears} years ${sumOfMonths} months ${sumOfDays1} days`);

const sumOfDays0: number = 366;
const sumOfYears1: number = Math.round(366 / 365);
const sumOfMonths1: number = Math.round((366 % 365) / 30);
const sumOfDays2: number = Math.round((366 % 365) % 30);

console.log(`${sumOfYears1} years ${sumOfMonths1} months ${sumOfDays2} days`);

// No 6
const dateOne: Date = new Date("2022-01-20");
const dateTwo: Date = new Date("2022-01-22");

const sumOfDifferenceDate = dateTwo.getTime() - dateOne.getTime();

const differenceOfdate = Math.abs(sumOfDifferenceDate);
const differenceOfdate1 = differenceOfdate / (1000 * 3600 * 24);
console.log(differenceOfdate1);

// No 1 meeting 2
const checkNumber: number = 4;

if (checkNumber % 2 === 0) {
  console.log(`${checkNumber} is even`);
} else {
  console.log(`${checkNumber} is odd`);
}

// No 2 meeting 2
const prima1: number = 9;
let divisor: number = 0;

for (let i = 1; i <= prima1; i++) {
  if (prima1 % i == 0) {
    divisor++;
  }
  console.log(i);
  console.log(divisor);
}

if (divisor == 2) {
  console.log(`${prima1} is prime`);
} else {
  console.log(`${prima1} is not prime`);
}

// No 3 meeting 2
let findNumberN: number = 5;
const resultFindNumberN: number = (findNumberN * (findNumberN + 1)) / 2;
console.log(resultFindNumberN);

// No 4 meeting 2

// No 5 meeting 2
// No 6 meeting 2
