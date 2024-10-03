// versi JS
const massage = "Hello world";

// versi TS (setelah penamaan variable, titik dua lalu tentukan mau menulis tipe data apa)
const pesan: string = "Hello World";

// ========== string build in method

const nama: string = "udin jago";
const nama2: string = " coding";
const nama3: string = " banget";

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("o", "a"));
console.log(nama.replaceAll("o", "a"));
console.log(nama.split(" "));
console.log(nama.concat(nama2).concat(nama3));
console.log(nama.slice(0, 3));

const nama1: string = nama.toLowerCase();
console.log(nama1);

// ========== TEMPLATE LITERALS / TEMPLATE STRING
const nama4: number = 1234;
const massage1: string = `Welcome ${nama4}`;

console.log(massage1);

// ========== NUMBER BUILD IN METHOD
const angka: string = "2000";
console.log(Number(angka));
console.log(typeof angka);
console.log(typeof Number(angka));
console.log(typeof parseInt(angka));
console.log(parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// TYPE CONVERTION

// STRING CONVERTION
const angka1: number = 20;
console.log(String(123));
console.log(angka1.toString());

// BOOLEAN CONVERTION
console.log(Boolean(1)); // selain angka 0 itu pasti true
console.log(Boolean(0));
console.log(Boolean("")); // hanya petik 2 isinya false
console.log(Boolean("1")); // jika ada isinya true

// ========== Date Data Types
const now: Date = new Date();
console.log(now);

// get method
console.log(now.getFullYear());
console.log(now.getMonth() + 1); // khusus untuk bulan itu startnya dari 0, jadi harus ditambah 1 supaya sama
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());

// set method
now.setDate(10);
now.setMonth(5);
now.setFullYear(2040);

console.log(now);

// ========== Basic Operator (+ - * / % **)
console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(9 % 2); // modulo digunakan untuk pencarian ganjil genap
console.log(9 % 1);
console.log(3 ** 2);

const a = 10;
const b = 20;
console.log(a - b);

// ========== Modify in Place
// n = n + 2

let n: number = 4;
n *= 2;
console.log(n);

// ========== INCREMENT DAN DECREMENT
let counter = 5;

counter++;

console.log(counter);

// POSTFIX DAN PREFIX FORM
let counter2: number = 2;

// console.log(++counter2);
console.log(counter2++);

// COMPARISON OPERATOR

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != "5");
// console.log(5 !== "5");

// ========== Math
// Math Ceil -> membulatkan angka keatas
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.6));

// Math Floor -> membulatkan angka kebawah
console.log(Math.floor(4.9));
console.log(Math.floor(4.4));

// Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.8));
console.log(Math.round(4.3));
console.log(Math.round(4.5));

// Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3, 4, 7, 6, 8, 5));

// Math min -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.min(1, 2, 3, 4, 7, 6, 8, 5));

// Math abs -> menghilangkan tanda negatif (-)
console.log(Math.abs(-10));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());
