// ========== ARRAY

const array: string[] = ["a", "b", "c"]; // cara 1
const array2: string[] = new Array("a", "b", "c"); // cara 2
const array3: number[] = [1, 2, 3, 4]; // cara 1
const array4: number[] = new Array(1, 2, 3, 4); // cara 2

// Array of Object -> data dari API dapetnya bentuknya ini
// name itu KEY
// "udin" itu VALUE
// suggession pencet spasi + ctrl

// const students: { name: string; email: string }[] = [
//   { name: "udin", email: "udin@gmail.com" },
//   { name: "siti", email: "siti@gmail.com" },
//   { name: "maryam", email: "maryam@gmail.com" },
// ];

// interface harus awalnya pake kapital (Pascalcase) dan harus singular (tanpa huruf "s")
interface Student {
  name: string;
  email: string;
  hobby?: string; // menambahkan tanda tanya untuk optional
  address?: Address; // objek didalam objek itu gapapa, objek dapat dimasukkan apa saja
}

interface Address {
  street: string;
  city: string;
}

// type Student = {
//   name: string;
//   email: string;
// };

const students: Student[] = [
  { name: "udin", email: "udin@gmail.com" },
  {
    name: "siti",
    email: "siti@gmail.com",
    address: { street: "Jalan XYZ", city: "BDG" },
  },
  { name: "maryam", email: "maryam@gmail.com" },
];

// ========== FOR OF
const fruits: string[] = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruits);
}

// EXERCISES

const numbers: number[] = [1, 2, 3, 4, 5, 6];
let sum1 = 0;
for (const number of numbers) {
  sum1 += number;
}
console.log(sum1);

// ========== FUNCTION -> ada 2 cara untuk menuliskan fungsi
// 1. function declaration

function square(number: number) {
  // yg didalam kurung namanya parameter
  return number * number;
}

const result = square(4); // didalam kurung namanya argumen, konek ke parameter
const result2 = square(10);

console.log(result);
console.log(result2);

// 2. function expression
const square1 = function (number: number) {
  return number * number;
};

const result3 = square1(4);
const result4 = square1(10);

console.log(result3);
console.log(result4);

// FUNCTION SCOPE -> variable yang di define didalam function hanya bisa diakses didalam function tersebut

// function greeting() {
//   const hello = "Hello";
//   console.log(hello);
//   return hello;
// }

// // console.log(hello); tidak dapat berjalan diluar function itu

// greeting();

// ========== PARAMETER DAN ARGUMENT
// parameter -> variable yang mewakili value dari argumen yang dimasukkan
// argument -> value yang dimasukkan saat pemanggilan function

//                  parameter
function greeting(name: string) {
  const hello = "Hello";
  return hello + " " + name;
}

// console.log(hello); tidak dapat berjalan diluar function itu

//                    argument
console.log(greeting("budi"));
console.log(greeting("siti"));
console.log(greeting("udin"));

// ========== DEFAULT PARAMETER
function multiply(a: number = 4, b: number = 3) {
  // angka 1 hanya nilai default, jika angka 2 diisi di argument maka yang muncul akan angka 2
  console.log(a);
  console.log(b);
  return a * b;
}

console.log(multiply(5, 5));
console.log(multiply());

// ========== REST PARAMETER -> mewakili sisa argument kedalam 1 variable

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
} // untuk manyMoreArgs jika ingin melakukan return itu harus dikalkulasi dulu dengan perintah for atau apapun itu

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ========== NESTED FUNCTION -> fungsi yang berada didalam fungsi

// inner function bisa akses parameter dari outer function
// outer function tidak bisa akses parameter dari inner function
// sifat function hanya boleh me return 1 kali

// outer function
function getMessage(firstName: string) {
  // inner function 1
  function sayHello() {
    return "Hello " + firstName + ",";
  }
  // inner function 2
  function welcomeMessage() {
    return "Welcome to Purwadhika!";
  }
  return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("udin"));

// ========== CLOSURE
// inner function selalu mempunyai akses ke variable dan parameter dari outer function bahkan setelah function tersebut di return

function ucapan(name: string) {
  const defaultMessage: string = "hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

const result5 = ucapan("udin");
console.log(result5());

// ========== RECURSIVE -> fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

// ========== ARROW FUNCTION -> shortcut untuk menuliskan function expression

// contoh function expression'

const square2 = function (number: number) {
  return number * number;
};

// contoh jika diubah ke arrow function
const square3 = (number: number) => {
  return number * number;
};

square3(3);

// klo misal cuman 1 line bisa dibikin kaya gini
const square4 = (number: number) => number * number;

// ========== ARRAY BUILD IN METHOD
// join -> menggabungkan value yang ada dalam array kedalam bentuk string

const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// pop -> menghilangkan isi value paling akhir dalam array
const words2: string[] = ["hello", "world", "hello"];
words2.pop();
console.log(words2);

// shift -> menghilangkan value paling depan dalam array
const words3: string[] = ["test", "hello", "world", "hello"];
words3.shift();
console.log(words3);

// push -> menambahkan value kedalam array di paling akhir
const words4: string[] = ["hello", "world"];
words4.push("watashi no", "soul society");
console.log(words4);

// unshift -> menambahkan value ke urutan paling depan array
const words5: string[] = ["watashi no", "soul society"];
words5.unshift("hello", "world");
console.log(words5);

// concat -> menggabungkan 2 array menjadi 1 array
const arr1: string[] = ["hello"];
const arr2: string[] = ["world"];
const arr3: string[] = ["world", "soul", "society"];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

// cara lain
const mergeArr = [...arr1, ...arr2, ...arr3]; // spread operator
console.log(mergeArr);

//splice -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus -> spice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "march", "jun", "jul"];
months.splice(1, 0, "feb"); // menambahkan pada index 1
console.log(months);

months.splice(3, 2); // menghapus pada index 3
console.log(months);

months.splice(2, 1, "may");
console.log(months);

// slice -> mereturn array baru dengan value yang sudah ditentukan index start dan index end dari array tsb
// rumus -> slice(startIndex, endIndex)

const buah: string[] = ["banana", "orange", "apple", "lemon", "manggo"];
console.log(buah.slice(1, 4)); // dari kiri ke kanan
console.log(buah.slice(-4, -1)); // dari kanan ke kiri

// indexof -> mencari index dari value yang kita search
// jika tidak ditemukan akan me return -1
const buah1: string[] = ["banana", "orange", "apple", "lemon", "manggo"];
console.log(buah1.indexOf("orange"));
console.log(buah1.indexOf("asdsa"));

// sort -> mengurutkan isi array berupa string atau number
const buah2: string[] = ["manggo", "banana", "orange", "apple", "lemon"];
buah2.sort();
console.log(buah2);
console.log(buah2.reverse());

// versi number tanpa compare function

const points: number[] = [
  5, 3, 4, 1, 10, 43, 12, 55, 78, 98, 66, 44, 4, 15, 34,
];
points.sort();
console.log(points); // tidak urut karena hanya melihat angka awalnya saja

//versi number menggunakan compare function
const points2: number[] = [
  5, 3, 4, 1, 10, 43, 12, 55, 78, 98, 66, 44, 4, 15, 34,
];
points2.sort((a, b) => a - b); // asc (kecil ke besar)
console.log(points2);

// dari besar ke kecil
const points3: number[] = [
  5, 3, 4, 1, 10, 43, 12, 55, 78, 98, 66, 44, 4, 15, 34,
];
points3.sort((a, b) => b - a); // asc (besar ke kecil)
console.log(points3);

// reverse -> membalikkan urutan elemen dalam array
const points4: number[] = [10, 43, 12, 55, 78, 98, 66, 44, 4, 15, 34];
points4.reverse();
console.log(points4);

// foreach -> melakukan looping pada array tapi tidak me-return apapun
const buah3: string[] = ["manggo", "banana", "orange", "apple", "lemon"];

buah3.forEach((buah0, index) => {
  console.log(index);
  console.log(buah0);
});

// map -> melakukan looping sama seperti foreach NAMUN me-return array baru
const buah4: string[] = ["manggo", "banana", "orange", "apple", "lemon"];

const result6 = buah4.map((buah0, index) => {
  return buah0;
});

console.log(result6);

// filter -> melakukan looping juga sama kaya dengan map, dan menghasilkan array baru berdasarkan kondisi pada return function
const ages: number[] = [32, 15, 29, 17, 30, 21, 24];
const result7 = ages.filter((age) => {
  return age > 17;
});
console.log(result7);

// find -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [32, 15, 29, 17, 30, 21, 24];
const result8 = ages2.find((age) => age >= 15);
console.log(result8);

// findindex -> mirip seperti find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [15, 29, 17, 30, 21, 24];
const result9 = ages3.findIndex((age) => age >= 21);
console.log(result9);

// reduce -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array

const angka2: number[] = [175, 75, 50, 25];
const result10 = angka2.reduce((a, b) => a - b);
console.log(result10);

// includes -> mengecek value pada array ada apa tidak, hasil return nya adalah boolean
const buah5: string[] = ["manggo", "banana", "orange", "apple", "lemon"];

console.log(buah5.includes("manggo"));
console.log(buah5.includes("jeruk"));
