// ========== IF STATEMENT

const umur: number = 17;
if (umur >= 17) {
  console.log(`Anda berhak membuat KTP`);
}

// IF ELSE STATEMENT
const umur1: number = 16;
if (umur1 >= 17) {
  console.log(`Anda berhak membuat KTP`);
} else {
  console.log(`Anda belum cukup umur untuk membuat KTP`);
}

// ELSE IF STATEMENT -> untuk kasus yang lebih kompleks
const nilai: string = "a";

const grade: string = nilai.toUpperCase();

if (grade === "A") {
  console.log(`Selamat anda sesuai dengan jurusan pilihan`);
} else if (grade === "B") {
  console.log(`Selamat anda cukup sesuai dengan jurusan pilihan`);
} else if (grade === "C") {
  console.log(`Anda kurang sesuai dengan jurusan pilihan`);
} else {
  console.log(`lebih baik pikirkan kembali`);
}

// ========== SWITCH CASE -> untuk menentukan decision making yang hanya perlu 1 case saja (kasus simple saja)

const day: string = "rabu";

const day1: string = day.toLowerCase();

switch (day1) {
  case "senin":
    console.log(`hari kerja`);
  case "selasa":
    console.log(`hari kerja`);
  case "rabu":
    console.log(`hari kerja`);
  case "kamis":
    console.log(`hari kerja`);
    break;
  case "jumat":
    console.log(`hari libur`);
  case "sabtu":
    console.log(`hari libur`);
    break;
  default:
    console.log(`masih mikirin kerja aja, libur sono`);
}

// ========== LOGICAL OPERATOR
// && -> AND
const umur3: number = 16;
const punyaSIM: boolean = true;

if (umur3 >= 17 && punyaSIM) {
  console.log(`boleh membawa kendaraan`);
} else {
  console.log(`boleh membawa kendaraan juga, lebih rawan tilangan aja`);
}

// || -> OR
const car = "BMW";

if (car === "BMW" || car === "Mercy") {
  console.log(`Mobil Germany`);
} else {
  console.log(`mobil jepang`);
}

// ! -> NOT
const isSunny: boolean = true;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ========== TERNARY OPERATOR -> shortcut untuk if else confition
// condition ? true : false

const str: string = "javascript";

// cara biasa
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

// cara ternary
console.log(str === "javascript" ? "javascript" : "not javascript");

// ========== LOOP STATEMENT (PERULANGAN) -> rangkaian instruksi yang dilakukan berulang kali hingga kondisinya terpenuhi.
// tipe lopp : for loop, while loop, do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : untuk menginisiasikan variable dari looping itu sendiri
// statement 1 : mendefine kondisi dari looping tersebut
// statement 1 : kode yang di eksekusi diakhir setiap literasi

// syntax : for(statement1;statement2;statement3){
// code block yang akan diulang ulang
// }

for (let i = 0; i < 5; i++) {
  console.log("hello world");
  console.log(i);
}

// for loop nested
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("hello world");
  }
}

// WHILE LOOP

let i: number = 1;

while (i <= 5) {
  console.log("hello world");
  i++;
}

// DO WHILE LOOP (pasti keluar pertanyaan ttg do while loop dan while loop di tes)

let count: number = 1;

do {
  console.log("ini literasi ke : " + count);
  count++;
} while (count <= 0);

// ========== BREAK -> untuk menghentikan sebuah loop

let sum: number = 0;

while (true) {
  console.log("sum : " + sum);

  if (sum >= 5) {
    break;
  }

  sum++;
}

// ========== CONTINUE -> melakukan skip pada looping

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`perulangan ganjil ${i}`);
}
