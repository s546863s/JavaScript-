const fruits = ["apple", "banana", "orange"];
// Adding an element to the end of the array
fruits.push("graoes");
console.log(fruits); // Output: ["apple", "banana", "orange", "grapes"]

// Removing the last element from the array

const lastFruit = fruits.pop();
console.log(lastFruit);



console.log(fruits); // Output: ["apple", "banana", "orange"]

// Adding multiple elements to the end of the array
const moreFruits = ["kiwi", "mango"];
fruits.push(...moreFruits);
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi", "mango"]




const moreFruits2 = ["pear", "peach", "plum", "pineapple", "watermelon", ];

fruits.push(...moreFruits2);
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi", "mango", "pear", "peach", "plum", "pineapple", "watermelon"]