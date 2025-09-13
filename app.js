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