// No 1
const panjang: number = 5;
const lebar: number = 3;
const total: number = panjang * lebar;
console.log(total);

// No.2
const panjang1: number = 5;
const lebar1: number = 3;
const total1: number = panjang1 + panjang1 + lebar1 + lebar1;
console.log(total1);

// No.3
const jarijari: number = 5;
const rumus: number = 22 / 7;
const diameter: number = jarijari * 2;
const circumference: number = 2 * rumus * jarijari;
const area: number = rumus * jarijari * jarijari;
console.log(diameter);
console.log(circumference);
console.log(area);

// No. 4
const a: number = 80;
const b: number = 65;
const totalangel: number = 180;
const total2: number = 180 - (a + b);
console.log(total2);

// No. 5
// 400 days
const tahun = Math.round(400 / 365);
const bulan = Math.round((400 % 365) / 30);
const hari = Math.round(400 % 365) % 30;

console.log(tahun + " year " + bulan + " month " + hari + " days.");

// 366 days
const tahun2 = Math.round(366 / 365);
const bulan2 = Math.round((366 % 365) / 30);
const hari2 = Math.round(366 % 365) % 30;

console.log(tahun2 + " year " + bulan2 + " month " + hari2 + " days.");

// No. 6
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const difference = date2.getTime() - date1.getTime();
const hasil3 = Math.abs(difference);
const hasil4 = hasil3 / (1000 * 3600 * 24); // (rumus milisecond dalam sehari)

console.log(hasil4);
