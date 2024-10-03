// No 1

const angka: number = 12;

if (angka % 2 == 0) {
  console.log(`bilangan genap`);
} else {
  console.log(`bilangan ganjil`);
}

// No 2
const prima: number = 7;
let pembagi: number = 0;
for (let i = 1; i <= prima; i++) {
  if (prima % i == 0) {
    pembagi++;
  }
  console.log(i);
  console.log(pembagi);
}

if (pembagi == 2) {
  console.log(`${prima} Bilangan prima`);
} else {
  console.log(`${prima} bukan bilangan prima`);
}

// No 3
const find = 3;
let sum = 0,
  i = 1;
while (i <= find) {
  sum += i;
  i++;
}

console.log("The sum of natural numbers: " + sum);

// No 4
let faktorial = 6;
let hasil = 1;

for (let i = faktorial; i > 0; i--) {
  hasil *= i;
}
console.log(`hasil faktorial dari ` + faktorial + ` adalah ` + hasil);

// No 5
const n: number = 15;
let aa: number = 0;
let bb: number = 1;
let c: number;

for (let i = 2; i <= n; i++) {
  c = aa + bb;
  aa = bb;
  bb = c;
  console.log(c);
  console.log(i);
  console.log(i);
}
