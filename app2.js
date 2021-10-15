//a) The prompt should ask the user "Enter a number"
// b) Store the result in a variable named num1(you can use different names if you'd like)

var num1 = prompt('Enter a Number')
console.log(num1);


// 5) Using the prompt method again ask the user for some more input
// a) The prompt should ask the user "Enter another number"
// b) Store the result in a variable named num2

var num2 = prompt('Enter number 48')
console.log(num2);

// 6) Alert the user to the solution of num1 to the power of num2

result = alert (Math.pow(num1, num2));

// 7) Generate a random number between 1 & 3, write the result to the console

console.log(Math.floor(Math.random() * 3) + 1);

// 8) Create an array named alphabet
// a) The elements in the array should be "a", "b", "c", "d", "e", "f"

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(alphabet);

 // 9) Remove "f" from our alphabet array

alphabet.pop('f');
console.log(alphabet);

// 10) Add "g" on the end of our array

alphabet.push('g');
console.log(alphabet);

// 11) Remove "a" from our alphabet array

alphabet.shift('a');
console.log(alphabet);

// 12) Add the number 1 to the front of our array

alphabet.unshift('1');
console.log(alphabet);

// 13) Write the entire alphabet array to the console, you should see[ 1, "b", "c", "d", "e", "g" ] if you don't go back and check your work before moving on

// 14) Push your work to github

// 15) Merge you practice branch into master / main