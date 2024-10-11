// Cara menuliskan sebuah object
// cara 1
const user = {};

// cara 2
const user2 = new Object();

// Properties & Method

interface User {
  name: string;
  greet: () => void;
  greet2: () => void;
}

const user3: User = {
  name: "Budi",
  greet() {
    console.log("Hello");
  },
  greet2: () => {
    console.log;
  },
};

// Add & Delete Properties
const person: any = {
  name: "Joko",
  age: 20,
};

console.log(person);
person.hobby = "volley";
console.log(person);
person["address"] = "Jogja";
console.log(person);

// Delete property

delete person.address;
console.log(person);

// Accessing Value -> cara akses sebuah object
console.log(person.hobby); // using dot (".")
console.log(person["name"]); // using []

person.hobby = "Badminton";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));

// Mutable dan Immutable
// Mutable -> variable yang dapat diubah datanya (primitive daya dype)
// Immutable -> object yang tidak dapat diubah saat sudah dibuat (non primitive data type)

// Mutable
const count1: number = 4;
let count2: number = count1;
count2 = 10;

console.log(count1);
console.log(count2);

// Immutable
let orang1: any = {
  name: "Budi",
};

// let orang2: any = orang1;
let orang2: any = { ...orang1 };

orang2.age = 20;
orang2.address = "jakarta";

console.log(orang1);
console.log(orang2);

// Optional Chaining -> jika kita ingin mengakses value dari sebuah object dengan aman

const user4: any = {};

console.log(user4.address);
console.log(user4.address?.city);

// For In
const person3 = {
  name: "udin",
  age: 17,
};

for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// Destructuring Assignment -> mengeluarkan property dalam object menjadi sebuah variable

// versi destruc object
const person4 = {
  name: "udin",
  age: 17,
  hobby: "game",
};

console.log(person4.name);
console.log(person4.age);

const { name, age } = person4;
console.log(name);
console.log(age);

// versi destruc array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];

console.log(a);
console.log(b);

// Spread Operator -> digunakan untuk copy isi object / menggabungkan isi object
const objectOne = { name: "udin", password: "Admin123" };
const objectTwo = { email: "email@gmail.com", name: "jago" };

const result = { ...objectOne, ...objectTwo };
console.log(result);

// This Keyword -> mengakses properti lain didalam sebuah object

const person5 = {
  firstName: "Udin",
  lastName: "Jago",
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};

person5.greet();

// Class -> template/cetakan untuk membuat sebuah object

// class declaration
class User5 {
  greeting() {
    console.log("Hello World");
  }
}

// class expression
const User6 = class {
  greeting() {
    console.log("Hello World");
  }
};

// kata new itu menandakan itu sebuah class
const human = new User5();
const human2 = new User6();

human.greeting();
human2.greeting();

// Constructor -> method bawaan dari class yang akan dijalankan pertama kali saat kalian membuat object baru menggunakan template class

class person6 {
  name: string;
  #email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
  }
  greeting() {
    console.log(`Hello ${this.name}`);

    return `Hello ${this.name}`;
  }
  private showEmail() {
    console.log(this.#email);
  }

  sendReminder() {
    return this.showEmail();
  }
}

const orang3 = new person6("udin", "udinjago@gmail.com");

console.log(orang3.name);
console.log(orang3.greeting());

// Access Modifier -> public dan privat

// getter & setter
// get untuk membaca data
// set untuk set value didalam object

const orang4 = {
  firstName: "Udin",
  lastName: "jago",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

// Encapsulation -> konsep di OOP untuk nge-bundle data (properti dll) dalam 1 unit. contohnya adalah class dan object

// Inheritance -> pewarisan dari parent class ke child class. property dan method dari parent class bisa diakses oleh child class

class Product {
  productName: string;
  price: number;

  constructor(name: string, price: number) {
    this.productName = name;
    this.price = price;
  }

  readPrice() {
    console.log(this.price);
    return this.price;
  }
}

// tidak menggunakan konsep inheritnace
// class Book {
//   productName: string;
//   price: number;
//   author: string;

//   constructor(name: string, price: number, author: string) {
//     this.productName = name;
//     this.price = price;
//     this.author = author;
//   }
// }

// menggunakan konsep inheritance
class Book extends Product {
  author: string;

  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
  }
}

const buku = new Book("cara jago coding", 100_000, "Udin");
console.log(buku.productName);
console.log(buku.price);
console.log(buku.readPrice());

// Instance Of -> untuk mengecek apakah sebuah object memiliki hubungan ke class tertentu
class Animal {}
class Rabbit extends Animal {}
class tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof tree);
