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


const myObjectFruits = {
    name: "apple",
    price: 1200
}


fruits.push(myObjectFruits);

console.log(fruits);


fruits.pop()

fruits.pop()

fruits.pop()

console.log(fruits);


const numbers = [12, 13, 14, 15]; 

console.log(...numbers)

fruits.push(...numbers);

console.log(fruits);


numbers.shift()

console.log(numbers);



numbers.unshift("ryhfh", "1664", 4848);

console.log(numbers);




