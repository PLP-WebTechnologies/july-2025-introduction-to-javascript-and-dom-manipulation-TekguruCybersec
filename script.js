// Part 1: JavaScript Basics

// 1. Declare some variables with different data types.
let userName = 'Alex';
let userAge = 25;
let isStudent = true;

// 2. Use a conditional statement (if/else).
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// 3. Change the page content based on a condition.
let outputElement = document.getElementById('output-message');
if (isStudent) {
  outputElement.textContent = `Hello, ${userName}! You are a student.`;
} else {
  outputElement.textContent = `Hello, ${userName}!`;
}

// Part 2: JavaScript Functions

/**
 * Calculates the area of a rectangle.
 * @param {number} length The length of the rectangle.
 * @param {number} width The width of the rectangle.
 * @returns {number} The area of the rectangle.
 */
function calculateArea(length, width) {
  return length * width;
}

// A simple function to format a message.
function formatGreeting(name) {
  return `Welcome, ${name}! We hope you enjoy your visit.`;
}

// Call the functions and log the results.
let area = calculateArea(10, 5);
console.log(`The area is: ${area}`);

let greetingMessage = formatGreeting(userName);
console.log(greetingMessage);

// Part 3: JavaScript Loops

// Example 1: `for` loop to iterate through an array.
let colors = ['red', 'green', 'blue', 'yellow'];
console.log("Using a 'for' loop:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Example 2: `while` loop for a countdown.
let count = 5;
console.log("Using a 'while' loop:");
while (count > 0) {
  console.log(count);
  count--;
}

// Example 3: `forEach` to double each number in an array.
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
numbers.forEach(function(number) {
  doubledNumbers.push(number * 2);
});
console.log('Doubled numbers:', doubledNumbers);

// Part 4: DOM Manipulation

// 1. Select elements.
let toggleButton = document.getElementById('toggle-button');
let contentBox = document.getElementById('content-box');
let dynamicList = document.getElementById('dynamic-list');
let addItemButton = document.getElementById('add-item-button');

// 2. Add an event listener to the toggle button.
toggleButton.addEventListener('click', function() {
  // Toggle a CSS class to show/hide the content.
  contentBox.classList.toggle('hidden');
});

// 3. Change the text of the heading.
let mainHeading = document.querySelector('h1');
mainHeading.textContent = 'JavaScript: DOM is Fun!';

// 4. Create and append a new list item on button click.
let itemCounter = 1;
addItemButton.addEventListener('click', function() {
  // Create a new list item element.
  let newItem = document.createElement('li');
  // Set its text content.
  newItem.textContent = `New List Item ${itemCounter}`;
  // Append the new item to the list.
  dynamicList.appendChild(newItem);
  itemCounter++;
});

