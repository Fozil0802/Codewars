// 1-masala
// juft va toq son

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd);

// 2-masala

multiply = function (a, b) {
  return a * b;
};

// 3-masala
// 1-usul
function positiveSum(arr) {
  // return arr.reduce((a, b) => a + (b > 0 ? b : 0));
}

console.log(positiveSum());

// 2-usul

// let arr = [1, -4, 7, 12];
// let newsum = 0;
// function positiveSum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newsum += arr[i];
//     }
//   }
//   return newsum;
// }

// console.log(positiveSum(arr));

// 4-masala

function makeNegative(number) {
  // Agar raqam salbiy bo'lmasa, salbiy qilinganini qaytaradi
  // return number < 0 ? number : -number;
  return -Math.abs(number);
}

// Test qilish
console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0
console.log(makeNegative(0.12)); // -0.12

// 5-masala

let number = 12;
function opposite(number) {
  return number * -1;
}

console.log(opposite(number));

// 6-masala
let num = 123;
function numb(num) {
  return num.toString();
}
console.log(numb(typeof "num"));

// 7-masala

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord());

// 8-masala

let str = "world";

function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution(str));

// 9 - masala

let str1 = "1, 2, 3, 4, 5";

function removeChar(str1) {
  return str1.substring(1, str1.length - 1);
}
console.log(removeChar(str1));

// 10-masala

let numbers = [1, 2, 3, 4];

function squareSum(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] ** 2;
  }
  return result;
}
console.log(squareSum(numbers));

// 11-masala ????????????????????????

// let repeat1 = "f";
// function repeatStr (n, s) {
//   return s.repeat(n);
// }
// console.log(repeatStr(repeat1));

// ?????????????????????????

// 12-masala

const findsum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(findsum(8));

// 13- masala
let text = "fo zi  l shav kato  vich";

function noSpace() {
  return text.replace(/\s/g, "");
}

console.log(noSpace(text));

// 14-masala

function finder() {
  let args = [5, 3, 7, 27, 9];
  return Math.min(...args);
}
console.log(finder());

// 15-masala

// function countSheeps(arrayOfSheep) {
//   var sheepCounter = 0;

//   for (var i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       sheepCounter++;
//     }
//   }

//   return sheepCounter;
// }
// console.log(countSheeps());
// 2-usul
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
// console.log(countSheeps());

// 16-masala

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  // Code
  let result = 0;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      return "not a valid operator";
      break;
  }
  return result;
}

console.log(basicOp());

// 17-Masala

let year = 2101;

function century(year) {
  // 1-usul
  //   let centuryCount = 0;
  // while (year > 0){
  //   year = year - 100;
  //   centuryCount = centuryCount + 1;
  // }
  // return centuryCount;
  // 2-usul
  return Math.ceil(year / 100);
}
console.log(century(year));

// 18-maslala

// time 3=> liter= 1
// time 6.7=> liter= 3

let time = 3;

function litres(time) {
  return Math.floor(time / 2);
  // Math.floor(time*0.5)
}

console.log(litres(time));

// 19-masala

let n = 12345;

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
console.log(digitize(n));

// 20-masala

let num1 = 12;
/*n sonining ikkita x VA y soniga bo‘linishini tekshiradigan isDivisible(n, x, y) funksiyasini yarating.
Barcha kirishlar ijobiy, nolga teng bo'lmagan raqam.
Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5*/

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}
console.log(isDivisible(num1));

// 21-masala
let name = "Fozil";
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet(name));

// 22-masala

function greet() {
  return "hello world!";
}
console.log(greet());

// 23-masala
// 1-usul
let arr = ["hay", "junk", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(arr));

// 2-usul

function findNeedle(haystack) {
  // your code here
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}

console.log(findNeedle(arr));

// 24-masala

function lovePetals(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(lovePetals(1, 4));

// 23-masala

let arr1 = [1, 2, 3, 4, 5];

function maps(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(x[i] * 2);
  }
  return newArr;
}

// 2-usul

function maps(x){
  return x.map(n => n * 2);
}
console.log(maps(arr1));

// 24-masala

// 1-usul
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  } else {
    return n*m
  }
}

// 2-usul
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}
console.log(paperwork(-5,2));


// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)

// // function points(games) {
// //   return games.reduce((output,current)=>{
// //     let x = parseInt(current[0]);
// //     let y = parseInt(current[2]);
// //     let value= x>y ? 3 : x===y ? 1 : 0;
// //     return output+value;
// //   },0)
// // }

// function points(games) {
//     let total = 0;
//     games.map(game => {
//       if (game[0] > game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }
