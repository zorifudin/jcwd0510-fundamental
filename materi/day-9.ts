// DATA STRUCTURE

// STACK -> LIFO (Last In First Out)

class stack {
  #container: any[];
  maxSize: number;
  constructor() {
    this.#container = [];
    this.maxSize = 10;
  }

  push() {}
}

// Queue -> FIFO (First In First Out)
class Queue {
  #container: any[];

  constructor() {
    this.#container = [];
  }

  enqueue(element: any) {
    return this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  showContainer() {
    return this.#container;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));

console.log(queue.showContainer());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.showContainer());

// SET -> hanya dapat menyimpan unique value saja

const fruits: string[] = ["banana", "apple", "manggo", "apple"];

const mySet = new Set(fruits);

console.log(mySet);

// menambahkan data kedalam set
mySet.add("grape");

console.log(mySet);

// mengecek apakah didalam set ada value yang kita cari
console.log(mySet.has("apple"));

// delete data
console.log(mySet.delete("grape"));

console.log(mySet);

// looping isi set
for (const value of mySet) {
  console.log(value);
}

// menghitung jumlah data yang ada
console.log(mySet.size);

// MAP ===========================================================================================================

const myMap = new Map();

myMap.set("Udin", "123");
myMap.set("David", "321");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.size);

console.log(myMap.get("Udin"));
console.log(myMap.get("David"));

console.log(myMap.has("David"));
console.log(myMap.has("jago"));
console.log(myMap.delete("David"));

// LINKED LIST ============================================================================================================
