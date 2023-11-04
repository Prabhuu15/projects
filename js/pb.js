//1.Create a function that takes two numbers as arguments and returns their sum

function sum(a,b){
    var c=a+b;
    return c;
    }
    console.log(sum(2,5));

//2. Write a function that takes an integer minutes and converts it to seconds.
    function minutesToSeconds(minutes) {
        var seconds = minutes * 60;
        return seconds;
      }
       console.log(minutesToSeconds(10));
 
//3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function increment(a){
    var x=a+1;
    return x;}
console.log(increment(10));

//4. Create a function that takes the age in years and returns the age in days.

function yearTodays(a){
    var ageindays=a*365;
    return ageindays;}
console.log(yearTodays(10));

//5.Create a function that takes voltage and current and returns the calculated power

function power(voltage,current){
    c = voltage * current
    return c
}
console.log(power(5,10));

//6.Write a function that returns the string "something" joined with a space " " and the given argument a.

function some(b){
    a= "something " +b
    console.log(a)
    }
    some("special");

//  7.	Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
  function a(a, b) {
    if (a + b == 10 || a == 10 || b == 10) {
      return true;
    }
    return false;
  }
  console.log(a(5, 5)); 

//8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
  
  function two(a,b){
    if(a.length==b.length){
        return true
    }
    return false
    }
    console.log(two("balaji","prabhu"))

//9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

var hello=(a,b,c)=>a+b+c;
console.log(hello("Good"," ","Night"));
    

// 10.	Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

    function number(a){
        b = a.join('');
        c = '(' + b.slice(0, 3) + ')';
        d = b.slice(3, 6);
        e = '-' + b.slice(6, 10);
        f = c+d+e
        return f
        }
        numberarray = [0,1,2,3,4,5,6,7,8,9]
        console.log(number(numberarray));

//11.Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

const arr=["a","bbb","cccc","ddddd"];
arr.sort((x , y)=> x.length -y.length )
console.log(arr);


function bylength(a) {
    let c;
    for(i=0;i<a.length;i++) {
        for(j=i+1;j<a.length;j++) {
            if(a[j].length < a[i].length) {
             c=a[i];
             a[i]=a[j];
             a[j]=c;
            }
        }
    }return a;
}
newarray = ["a", "ccc", "dddd", "bb"]
console.log(bylength(newarray));

// 12.	Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// 	findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]


var a = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
var b=[];
for(var i=0;i<a.length;i++){
var max=a[i][0];
for(var j=0;j<a[i].length;j++){
if(max<a[i][j]){
max=a[i][j];
}
}
b.push(max);
}
console.log(b);

  
//   13.	Create a function that takes an array of numbers and returns the second largest number.
//   Example:
//   secondLargest([10, 40, 30, 20, 50]) ➞ 40


let a =[10, 40, 30, 20, 50]
let b = [0]
let c = [0]
for (let i=0 ; i<a.length ; i++){
if(a[i]>b){
c=b
b=a[i]
}
else if(a[i]>c && a[i]!==b){
c=a[i]
}
}
console.log(c)


// 14.	Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

var a = [1, 0, 1, 0];
var b = [];

for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}
console.log(b);


var f=0;
var a=[1,0,1,0];
var b=[];
var c=0;
for(var i=0;i<a.length;i++){
for(var j=0;j<b.length;j++){
if (a[i]==b[j]){
c++;
break;
}else{
c=0
}
}
if(c==0){
b[f]=a[i];
f++;
}
}
console.log(b);


// 15. Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.
// Example:
// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

const a = [2, 2, 2, 3, 4, 4, 4 , 5];
let b = [];
for (let i = 0; i < a.length; i++) {
let count = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[i] === a[j]) {
      count++;
    }
  }
  // If the count is 1, it means this is the unique number
  if (count == 1) {
 b.push(a[i]);

  }
}

console.log(b); 




// 16.	Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:
// charCount("c", "Chamber of secrets") ➞ 1

let a="Chamber of secrets"
var v=0;
for(let i=0;i<a.length;i++){
if(a[i]=="a")
v++;
}
console.log(`${v}`);

  
// 17.	Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5


let a = "Celebration";
let c = 0;
for (let i=0 ; i<a.length ; i++){
if(a[i]=="a" ||a[i]=="e" ||a[i]=="i" ||a[i]=="o"|| a[i]=="u" )
c++
}
console.log(c)

// 18.	Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

let a = "Happy Birthday"
let b = ""
for (let i=0;i<a.length;i++){
if(a[i]==a[i].toUpperCase()){
 b+=a[i].toLowerCase();
}
else{
b+=a[i].toUpperCase()
}
}
console.log(b)

// 19.	  Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
// 			Input:      n=5
// 			Output:   2 4 6 8 10

let a = 5
let b=0
for(let i=0;i<a;i++){
b+=2
console.log(b)
}

let n = 5;
let b;
for (let i = 0; i < n; i++) {
    const b = i * 2;
    console.log(b);
}


// 20. Create Function that will take one parameter and return type of the data.
			
// Input:       500
// Output:     Integer

// Input:       Coding
// Output:    String

function typeoff (a){
  return typeof a;
}
console.log(typeoff(50))
console.log(typeoff(integer))

// 21. Program to find greatest of three numbers(using ternery operator).

// Input:  4 8 2
// Output: 8 is gretest

// const num1 = 4, num2 = 8, num3 = 2;
// const maxNum = Math.max(num1, num2, num3);
// if (maxNum === num1) {
//   console.log(`${num1} is greatest`);
//   } else if (maxNum === num2) {
//     console.log(`${num2} is greatest`);
//     } else {
//       console.log(`${num3} is greatest`);
//       }

let a = 4
let b = 2
let c = 8
const max = (a>b)?(a>c ? a : c ) : (b>c ? b : c)
console.log(max +"is greater")

// 22 .  Program to find factorial of number.
		
// 			Input: n=5
// 			Output: 120
// 			Explanation: 5 x 4 x 3 x 2 x 1 = 120

let a = 5;
let b = 1;

for (let i = 1; i <= a; i++) {
  b *= i;
}

console.log(b); 

// 23. C Program to arrange numbers in ascending order
// Input: [2,3,1,5,4]
// Output: [1,2,3,4,5]
//Sort the Array using loop only(you can not use predefined function).

// let arr=[2,3,1,5,4];
// for(let i=0;i<arr.length-1;i++){
//   for(let j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//       let temp=arr[j];
//       arr[j]=arr[j+1];
//       arr[j+1]=temp;
//       }
//       }
//       }
//       console.log(arr);

let arr = [2, 3, 1, 5, 4];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length-1; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);


// 24. Print Patter using loop.

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
   
  }
  console.log("\n");
}

// 25. C Program to Calculate the Power of a Number(using loop only).
// Input: n=5, p=3
// Output: 5 ^ 3 = 125
// Explanation: 5 x 5 x 5 = 125

const base = 5;
const exponent = 3;
let result = 1;

for (let i = 0; i < exponent; i++) {
  result *= base;
}

console.log(result);


// 26. Program to Check Whether a Number is Prime or Not

// Input: 9
// Output: 9 is not a prime no

// Input: 7
// Output : 7 is a prime no

function isPrime(n) {
  if (n <= 1) 
    return false; 

  for (let i = 2; i < n; i++) {
    if (n % i == 0) 
      return  `${n} is not a prime num`; 
  }
  
  return `${n} is a prime num`;
}

console.log(isPrime(12));

// 27. Program to find LCM of two numbers using while loop

// Input: 15 50
// Output: Lcm of 15 and 50 is 150.
// program to find the LCM of two integers
// take input

const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');
let min = (num1 > num2) ? num1 : num2;
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}



function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const result = lcm(48, 18);
console.log(result);


// 28. Program to Display Characters from A to Z Using Loop with count.
// Output: A1 B2 C3 D4 E5 F6 ……. Z26 

const startChar = 'A'.charCodeAt();

for (let i = 0; i < 26; i++) {
  const letter = String.fromCharCode(startChar + i);
  const position = i + 1;
  console.log(`${letter}${position}`);
}


// 29. Program to find a missing number
// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing
// 		Using loop only(you can not use predefined function)

var a = [5,3,1,4],
  count = 5;
var missing = [];
for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);


// 30. Program to count vowels and consonants in a given String.

// 			Input: i am ram.
// 			Output: 3 vowels 3 consonants.

const inputString = "i am ram.";
let vowels = 0;
let consonants = 0;
for (let i = 0; i < inputString.length; i++) {
  if (inputString[i].match(/[aeiou]/)) {
    vowels++;
  } else if (inputString[i].match(/[a-z]/)) {
    consonants++;
  }
}
const result = `${vowels} vowels and ${consonants} consonants.`
console.log(result);



// 31. program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]

a = [1,2,3,4,5,7,8,9,10]
b=a.splice(5,0,6)
console.log(a)


// 32. Reverse a number using while Loop

// 			Input: 123
// 			Output: 321


let num = 1234
let k = 0
while (num>0){
      
 k= num%10+k*10
 num= Math.floor(num/10)

}
console.log(k)