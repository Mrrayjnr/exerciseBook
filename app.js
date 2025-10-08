// Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
// let challenge = '30 Days of JavaScript';

// Print the string on the browser console using **console.log()**
// let challenge = '30 Days of JavaScript';
// console.log(challenge);

// Print the **length** of the string on the browser console using _console.log()_
// let challenge = '30 Days of JavaScript';
// console.log(challenge.length); ans 21

// Change all the string characters to capital letters using **toUpperCase()** method
// let challenge = '30 Days of JavaScript';
// console.log(challenge.toUpperCase()); ans 30 DAYS OF JAVASCRIPT

// Change all the string characters to lowercase letters using **toLowerCase()** method
// let challenge = '30 Days of JavaScript';
// console.log(challenge.toLocaleLowerCase());  ans 30 days of javascript

// Cut (slice) out the first word of the string using **substr()** or **substring()** method
// let challenge = '30 Days of JavaScript';
// console.log(challenge.substring(0,2));  ans 30

// Slice out the phrase _Days Of JavaScript_ from _30 Days Of JavaScript_.
// let challenge = '30 Days of JavaScript';
// console.log(challenge.substring(3));     ans Days of JavaScript

// Check if the string contains a word **Script** using **includes()** method
// let challenge = '30 Days of JavaScript';
// console.log(challenge.includes('Script'));  ans true

// Split the **string** into an **array** using **split()** method
// let challenge = '30 Days of JavaScript';
// console.log(challenge.split()); ans ['30 Days of JavaScript']

// Split the string 30 Days Of JavaScript at the space using **split()** method
// let challenge = '30 Days of JavaScript';
// console.log(challenge.split('')); ans ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** the string at the comma and change it to an array.
// let challenge = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(challenge.split(","));  ans ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// Change 30 Days Of JavaScript to 30 Days Of Python using **replace()** method.
// let challenge = '30 Days of JavaScript';
// console.log(challenge.replace("JavaScript","Python"));  ans 30 Days of Python

// What is character at index 15 in '30 Days Of JavaScript' string? Use **charAt()** method.
// let challenge = '30 Days of JavaScript';
// console.log(challenge.charAt(15));  ans S

// What is the character code of J in '30 Days Of JavaScript' string using **charCodeAt()**
// let challenge = '30 Days of JavaScript';
// console.log(challenge.charCodeAt('j')); ans 51

// Use **indexOf** to determine the position of the first occurrence of **a** in 30 Days Of JavaScript
// let challenge = '30 Days of JavaScript';
// console.log(challenge.indexOf('a')); ans a 

// Use **lastIndexOf** to determine the position of the last occurrence of **a** in 30 Days Of JavaScript.
// let challenge = '30 Days of JavaScript';
// console.log(challenge.lastIndexOf('a'));  ans 14 

// Use **indexOf** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
// let challenge = 'You cannot end a sentence with because because because is a conjunction';
// console.log(challenge.indexOf('because')); ans 31

// Use **lastIndexOf** to find the position of the last occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
// let challenge = 'You cannot end a sentence with because because because is a conjunction';
// console.log(challenge.lastIndexOf('because'));  ans 47

// Use **search** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
// let challenge = 'You cannot end a sentence with because because because is a conjunction';
// console.log(challenge.search('because'));  ans 31

// Use **trim()** to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// let challenge = '30 Days of JavaScript';
// console.log(challenge.trim());  ans 30 Days of JavaScript

// Use **startsWith()** method with the string _30 Days Of JavaScript_ and make the result true
// let challenge = '30 Days Of JavaScript';
// console.log(challenge.startsWith('30'));

// Use **endsWith()** method with the string _30 Days Of JavaScript_ and make the result true
// let challenge = '30 Days Of JavaScript';
// console.log(challenge.endsWith('JavaScript'));

// Use **match()** method to find all the **a**’s in 30 Days Of JavaScript


// Use **concat()** and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// let challenge = "30";
// console.log(challenge.concat("Days","of","JavaScript"));  ans 30DaysofJavaScript

// Use **repeat()** method to print 30 Days Of JavaScript 2 times
// let challenge = '30 Days of JavaScript';
// console.log(challenge.repeat(2));  ans 30 Days of JavaScript30 Days of JavaScript


// exercise
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = 'Oyin';
// let lastName = 'Lawal';
// let country = 'Nigeria';
// let city = 'Ikeja';
// let age = 25
// let isMarried = false
// let year = 2025

// console.log(typeof firstName);      string
// console.log(typeof lastName);       string
// console.log(typeof country);        string
// console.log(typeof city);           string
// console.log(typeof age);            number
// console.log(typeof isMarried);      boolean
// console.log(typeof year);           number


// Check if type of '10' is equal to 10
// console.log('10' == 10);        true


// Check if parseInt('9.8') is equal to 10
// console.log('9.8' == 10);               false

// 4. Boolean value is either true or false.
// 1. Write three JavaScript statement which provide truthy value.
// 2. Write three JavaScript statement which provide falsy value.



// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 1. 4 > 3 true 
// 4 >= 3 
// console.log(4 >= 3);  true 
// 4 < 3 false 
// 4 <= 3 false 
// 4 == 4
// console.log(4 == 4);  true
// 4 === 4
// console.log(4 === 4);   true 
// 4 != 4
// console.log(4 != 4);        false
// 4 !== 4
// console.log(4 !== 4);       false 
// 4 != '4'
// console.log(4 != '4')           false
// 4 == '4'
// console.log(4 == '4');              false
// 4 === '4'
// console.log(4 === '4');         false
// 12. Find the length of python and jargon and make a falsy comparison statement.
// console.log('python'.length !== 'jargon'.length) false


// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12     true && true -> true 
// 4 > 3 && 10 > 12     true && false -> false 
// 4 > 3 || 10 < 12     true || true -> true
// 4 > 3 || 10 > 12     true || false -> true
// !(4 > 3)             false
// !(4 < 3)             true
// !(false)             true
// !(4 > 3 && 10 < 12)  false
// !(4 > 3 && 10 > 12)  true
// !(4 === '4')         true
// There is no 'on' in both dragon and python
// let word1 = 'dragon';
// let word2 = 'dragon';

// console.log(!word1.includes('on') && !word2.includes('on'));    false 

// 7. Use the Date object to do the following activities
// What is the year today? 
// const now = new Date();
// console.log(now.getFullYear());  2025


//    2. What is the month today as a number?
// const now = new Date();
// console.log(now.getMonth()); 8

//    3. What is the date today?
// const now = new Date();
// console.log(now); Thu Sep 18 2025 14:32:46 GMT+0100 (West Africa Standard Time)

//    4. What is the day today as a number?
// const now = new Date();
// console.log(now.getDate()); 18
// What is the hours now?
// const now = new Date();
// console.log(now.getHours());
// What is the minutes now?
// const now = new Date()
// console.log(now.getMinutes());
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
// const allSeconds = Date.now();
// console.log(allSeconds); ans 1758726482367

// New Exercise
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he neds to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.

// let age = prompt("Enter your age:");
// let age = 15;

// if (15 >= 18) {
//     console.log("You are old enough to drive.")
// } else {
//     let yearsLeft = 18 - 15;
//     console.log("You are left with 3 years to drive");
// }


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.

// let myage = 25

// let yourage = prompt("Enter your age:");
// yourage = 30

// if (yourage > myage) {
//     console.log("You are 5 years older than me")
// } else if ( yourage < myage){
//     console.log("I am 5 years older than you")
// } else {
//     console.log("We are same age");
// }


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    // - using if else
    // - ternary operator.

    // ```js
    //   let a = 4
    //   let b = 3
    // ```

    // ```sh
    //   4 is greater than 3
    // ```

    // let a = 4
    // let b = 3

    // if ( a > b ) {
    //     console.log("a is greater than b")
    // } else {
    //     console.log("a is less than be")
    // }

    // Level 1 on looping

    // const countries = [
    //     "Albania",
    //     "Bolivia",
    //     "Canada",
    //     "Denmark",
    //     "Ethiopia",
    //     "Finland",
    //     "Germany",
    //     "Hungary",
    //     "Ireland",
    //     "Japan",
    //     "Kenya",
    //   ];
      
      // const webTechs = [
      //   "HTML",
      //   "CSS",
      //   "JavaScript",
      //   "React",
      //   "Redux",
      //   "Node",
      //   "MongoDB",
      // ];
      
      // const mernStack = ["MongoDB", "Express", "React", "Node"];

    //   console.log(countries.length), ans 11
    // console.log(webTechs.includes("React")); ans true 
    // console.log(mernStack.join(" - ")) ans MongoDB - Express - React - Node

// Iterate 0 to 10 using for loop, do the same using while and do while loop

// using for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }


// using while 
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do while 

// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop

// using for loop

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }


// using while 
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }


// do while loop

// let j = 10;
// do {
//   console.log(j);
//   j--;
// } while (j >= 0);
// Iterate 0 to n using for loop

// let n = 7; // you can set any number for n
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }
// Write a loop that makes the following pattern using console.log():

  //  ```js
  //      #
  //      ##
  //      ###
  //      ####
  //      #####
  //      ######
  //      #######
  //  ```

// for (let i = 1; i <= 7; i++) {
//   console.log('#'.repeat(i));
// }


// 5. Use loop to print the following pattern:

//    ```sh
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
//    ```

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }


// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

//     ```sh
//     The sum of all numbers from 0 to 100 is 5050.
//     ```


// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum)


// Develop a small script which generate array of 5 random numbers 

// let randomNumbers = [];

// for (let i = 0; i < 5; i++) {
//   // Generate random number between 0 and 100
//   let randomNum = Math.floor(Math.random() * 100);
//   randomNumbers.push(randomNum);
// }

// console.log(randomNumbers) 


// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let randomId = '';

// for (let i = 0; i < 6; i++) {
//   let randomIndex = Math.floor(Math.random() * characters.length);
//   randomId += characters[randomIndex];
// }

// console.log(randomId);

// for (let num = 2; num <= 100; num++) {
//   let isPrime = true;

//   // check divisibility
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//     ```sh
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//     ```


// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }

// console.log(`${sumEven}. ${sumOdd}.`);

// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }

// let result = [sumEven, sumOdd];
// console.log(result);


// let randomNumbers = [];

// for (let i = 0; i < 5; i++) {
//   let randomNum = Math.floor(Math.random() * 100); // random number between 0–99
//   randomNumbers.push(randomNum);
// }

// console.log(randomNumbers);


// let randomNumbers = [];

// while (randomNumbers.length < 5) {
//   let randomNum = Math.floor(Math.random() * 100); // generates numbers from 0–99
//   if (!randomNumbers.includes(randomNum)) {
//     randomNumbers.push(randomNum);
//   }
// }

// console.log(randomNumbers);


























// Exercise in functions

// Declare a function _fullName_ and it print out your full name.

// function printFullName (){
//   let firstName = 'Adenola'
//   let lastName = 'Adebola'
//   let space = ' '
//   let fullName = firstName + space + lastName
//   console.log(fullName)
// }

// printFullName()


// Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.

// function printFullName (){
//   let firstName = 'Adenola'
//   let lastName = 'Adebola'
//   let space = ' '
//   let fullName = firstName + space + lastName
//   return fullName
// }

// console.log(printFullName())

// Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
// function addTwoNumbers() {
//   let numOne = 20
//   let numTwo = 50
//   let total = numOne + numTwo
//   return total
// }

// console.log(addTwoNumbers())


// An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
// function areaOfRectangle(length, width) {
//   // let length = 30
//   // let width = 50
//   return length * width
// }

// console.log(areaOfRectangle());



// A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.

// function perimeterOfRectangle(length, width) {
//   return 2 * (length + width)
// }

// console.log(perimeterOfRectangle())


// A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
// function _volumeOfRectPrism_(length, width, height){
//   return (length * width * height)
// }

// console.log(_volumeOfRectPrism_())

// Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
// function areaOfCircle(r) {
//   let area = Math.PI * r * r
//   return area
// }

// console.log(areaOfCircle())


// Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
// function circumOfCircle(r) {
//   const PI = Math.PI;
//   return 2 * PI * r;
// }

// console.log(circumOfCircle())


// Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.

// function density(mass, volume){
//   return mass/ volume
// }

// console.log(density())

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
// function speed(distance, time) {
//   return distance / time;
// }

// console.log(speed())

// Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
// function weight(mass, gravity) {
//   return mass * gravity;
// }

// console.log(weight())

// Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelciusToFahrenheit_.
// function convertCelsiusToFahrenheit(oC) {
//   return (oC * 9 / 5) + 32;
// }

// console.log(convertCelsiusToFahrenheit());
// ..