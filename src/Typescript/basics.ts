// Primitives: number, string, boolean
// More complex types: arrays, object
// Function types, parameters

// Primitives
let age: number = 12;
age = 12;
console.log(age);

let userName: string | string[] = "John";
userName = "John";
console.log(userName);

let isInstructor: boolean = true;
isInstructor = true;
console.log(isInstructor);

// More complex types
let hobbies: string[] = ["Sport", "Cooking"];
hobbies = ["Sports", "Cooking"];
console.log(hobbies);

type Person = {
  name: string;
  age: number;
};

let person: Person = { name: "Max", age: 32 };
person = {
  name: "Max",
  age: 32,
};
console.log(person);

// person = {
//   isEmployee: true,
// };

const people: Person[] = [];
console.log(people);

// Type interface
let course: string | number = "React - The Complete Guide";
course = 12341;
console.log(course);

// Function & types
function add(a: number, b: number): number | string {
  return a + b;
}
console.log(add(2, 5));

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

function printResult(value: number | string): void {
  console.log("Result: " + value);
}
console.log(printResult(123));

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
console.log(stringArray);
console.log(updatedArray);

// Removed updatedArray[0].split(""); as updatedArray contains numbers, not strings.
// updatedArray[0].split("");
