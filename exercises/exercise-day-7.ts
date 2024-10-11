// No 1
function checkTwoObjectIsEqual(object1: any, object2: any) {
  if (
    typeof object1 !== "object" ||
    typeof object2 !== "object" ||
    object1 === null ||
    object2 === null
  ) {
    return false;
  }

  const keys1: any = Object.keys(object1);
  const keys2: any = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkTwoObjectIsEqual({ a: 2 }, { a: 1 }));
console.log(checkTwoObjectIsEqual({ a: "hello" }, { a: 1 }));
console.log(checkTwoObjectIsEqual({ a: 1 }, { a: 1 }));

// No 2
function intersectionObject(object3: any, object4: any) {
  const intersection: any = {};

  for (const key in object3) {
    if (object4.hasOwnProperty(key) && object3[key] === object4[key]) {
      intersection[key] = object3[key];
    }
  }
  return intersection;
}

console.log(intersectionObject({ a: 1, b: 2 }, { a: 2, c: 2 }));
console.log(intersectionObject({ a: 1, b: 2, c: 2 }, { b: 2, c: 2 }));

// No 3
function mergeTwoArray(array1, array2) {
  const mergeArray = [...array1, ...array2];

  const noDataDuplicate = {};

  mergeArray.forEach((name) => {
    noDataDuplicate[name.email] = name;
  });
  return Object.values(noDataDuplicate);
}

const array1 = [
  { name: "student1", email: "student1@gmail.com" },
  { name: "student2", email: "student2@gmail.com" },
];
const array2 = [
  { name: "student1", email: "student1@gmail.com" },
  { name: "student3", email: "student3@gmail.com" },
];

const result = mergeTwoArray(array1, array2);
console.log(result);

// No 4
function reverseProperty(array) {
  return array.map((data) => {
    const reverseObject = {};

    for (let key in data) {
      reverseObject[data[key]] = key;
    }

    return reverseObject;
  });
}

const input = [{ name: "udin", age: 17 }];
const result1 = reverseProperty(input);

console.log(result1);

// No 5
function factorial(value: number) {
  if (value === 0 || value === 1) return 1;
  return value * factorial(value - 1);
}

function faktorial2(nilai: number) {
  let hasil1 = factorial(nilai);
  let sum1 = "";

  for (let i = nilai; i > 0; i--) {
    sum1 += i;
    if (i > 1) {
      sum1 += " x ";
    }
  }
  return `${nilai}! = ${sum1} = ${hasil1}`;
}

let n = 5;
console.log(faktorial2(n));
