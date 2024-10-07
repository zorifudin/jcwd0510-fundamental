// No 1

function polaSegitiga(height) {
  let awal = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += awal.toString().padStart(2, "0") + " ";
      awal++;
    }
    console.log(row.trim());
  }
}

polaSegitiga(4);

// No 2
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);

// No 3
function calculateBMI(weight, height) {
  const bmi = weight / height ** 2;

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(calculateBMI(70, 1.75));

// No 4
function removeOddNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const hasil1 = removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(hasil1);

// No 5
function stringToArray(array) {
  return array
    .trim()
    .split(" ")
    .filter((arra) => {
      return arra;
    });
}

console.log(stringToArray("  Hello   World "));
