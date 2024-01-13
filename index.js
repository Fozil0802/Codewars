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
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
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

function maps(x) {
  return x.map((n) => n * 2);
}
console.log(maps(arr1));

// 24-masala

// 1-usul
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

// 2-usul
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
console.log(paperwork(-5, 2));

// 25-masala

function booleanToString(b) {
  //your code here
  if (b) {
    return "true";
  } else {
    return "false";
  }
}
console.log(booleanToString());

// function booleanToString(b){
//   return b ? 'true' : 'false';
// }

// function booleanToString(b){
//   return b.toString();
// }

// 26-masala

// function areYouPlayingBanjo(name) {
//   if (name[0] === 'R' || name[0] === 'r') {
//    return `${name} plays banjo`;
//  } else {
//    return `${name} does not play banjo`;
//  }
// }
// console.log(areYouPlayingBanjo());

// 27-masala

h = 0;
m = 1;
s = 1;
// 1-usul
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
// /2-usul
function past(h, m, s) {
  //#Happy Coding! ^_^
  let secondsToMillisec = s * 1000;
  let minutesToMillisec = m * 60000;
  let hoursToMillisec = h * 3600000;

  return secondsToMillisec + minutesToMillisec + hoursToMillisec;
}
console.log(past(h, m, s));

// 28=masala

let arr2 = [5, 10, 15, 20, 30];

let find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
console.log(find_average(arr2));



// 29-masala
// 1-usul

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   return (
//     yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
//   );
// }

// 2-usul
// function betterThanAverage(classPoints, yourPoints) {
//   const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
//   const classAverage = classPointsSum / classPoints.length;
//   const isBetter = yourPoints > classAverage;
//   return isBetter;
// }
// console.log(betterThanAverage());

// 30-masala Sum Arrays
// 1-usul

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// 2-usul
// Sum Numbers
// sum = function (numbers) {
//   "use strict";
//   return numbers.reduce(function(t, n){
//     return t + n;
//   }, 0);
// };
// console.log(sum());

// 31-masala Invert values
// sonni teskarisini chiqarish

// function invert(array) {
//       return array.map(num => num * -1);
// }

// console.log(invert(15));

// 32-masala //Simple multiplication

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}
 console.log(simpleMultiplication(2));

// 33-masala //Count of positives / sum of negatives
let input =  [1, 2, 3, 4, 5, 6,20, 7, 8, 9, 10, -11, -12, -13, -14, -25]
function countPositivesSumNegatives(input) {
  // your code here
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}
console.log(countPositivesSumNegatives(input));



// 34-masala //You only need one - Beginner

// function check(a, x) {
//   // your code here
//   return a.includes(x) ? true : false;
// }
// console.log(check());

// 35-masala
//1-usul
// function fakeBin(x){
//   // x = x.split('');
  
//   let toBinary = x => {
//     if (x < 5)
//       return 0;
//     else return 1
//   }
  
//   return x.map(toBinary).join('');
// }
// console.log(fakeBin());
// // 2-usul
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// 36-masala

function bmi(weight, height) {

  let bmi = weight/height**2
  if (bmi <= 18.5) {

    return "Underweight";
  } else if (bmi <= 25.0) {

    return "Normal"
  } else if (bmi <= 30.0) {

    return "Overweight"
  } else if (bmi > 30) {
    return "Obese"
  }
}
console.log(bmi(5,20));

// 37-masala

function grow(x){
  let num = 1;
  for (let i = 0; i < x.length; i++) {
    num *= x[i];
  }
  return num;
}
console.log(grow([1,2,3]));

// 36-masala //MakeUpperCase

function makeUpperCase(str) {
  // Code here
return  str.toUpperCase()

}
console.log(makeUpperCase('fozil'));

// 37-masala //Reversed sequence

const reverseSeq = n => {
  if (n < 1) {
    return [];
  } else {
    const curArray = [n];
    const recursed = reverseSeq(n - 1);
    return curArray.concat(recursed);
  }
}
console.log(reverseSeq(7));

// 38-masala // Is he gonna survive?

// function hero(bullets, dragons){
// //Get Coding!
//    return bullets >= (2 * dragons);
  
// }

function hero(bullets, dragons){
//Get Coding!
   return bullets = 2 * dragons? true: false;
  
}

console.log(hero(10, 10));

// 39-masala // Sentence Smash


function smash (words){
  if (words.length===0){
    return ""
  } else {
    return words.join(" ")
  }
}


console.log(smash(['fozil', 'shavkatovich']));

// 40-masala // Will you make it?

// 1-masala
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
    let ourDistance = mpg * fuelLeft
  if(ourDistance >= distanceToPump){
   return true;
  }else{
   return false
}
};
// 2-masala
const zeroFuell = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump;
};
console.log(zeroFuell(50, 25, 2));

// 41-masala

// 1-usul
// function countBy(x, n) {

//  return [...Array(n)].map((_, i) => x * ++i);

// }
// 2-usul
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
console.log(countBy(3,15));




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
