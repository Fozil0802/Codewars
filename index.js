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

function positiveSum(arr) {
  // return arr.reduce((a, b) => a + (b > 0 ? b : 0));
}

console.log(positiveSum());
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












//   -Masala

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
