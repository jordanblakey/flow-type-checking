// @flow

////////////////////////////
// VARIABLES
////////////////////////////

let name: string = 'John Doe'
// name = 50

let age: number = 40
// age = 'Forty'

let something: any = [1,2,3];
something[3] = 'I\'m a string!' // allowed
something[4] = false // allowed
something[5] = [3] // allowed

let users: string[] = ['John', 'Sara', 'Tom'];
users[3] = 'Terry'; // allowed
// users[4] = ['Jerry']; // type error
console.log(users)

let ids: number[] = [1,2,3];
ids[3] = 4 // allowed
// ids[4] = 'four' // type error

let hasKids: boolean = true;
hasKids = false // allowed
// hasKids = 'True' // type error

////////////////////////////
// INTERFACES
////////////////////////////

let person: Person;

person = {
  name: 'John', // allowed
  age: 30, // allowed
  // hasKids: true // allowed
  veteran: true // type error if missing
}

// person['age'] = 'forty' // type error`

interface Person {
  name: string;
  age: number;
  // hasKids?: boolean; // optional key
  veteran: boolean;
}

/////////////////////////////
// FUNCTIONS
/////////////////////////////

function greeting(name: string): string { // type checking for params, and return value
  return 'Hello '+name;
}

console.log(greeting('Brad'));
// console.log(greeting(1)); // type error on param

function greeting2(name){ // no type checking enabled
  return 'Bonsoir, '+name;
}

console.log(greeting2('Elliot'));
console.log(greeting2(2));

function greeting3(name): string{
  // return 1 // type error: expects a string but returns an int
  return 'hello'
}

// console.log(greeting3('Thomas')); // see line 72

function someFunction(value: string | number) { // expects a string OR a number
  return 2
}

someFunction(1);


/////////////////////////////
// UTILITY TYPES
/////////////////////////////

type Suit = "Diamonds" | "Clubs" | "Spades"; // expect one of these specific string values

const clubs: Suit = 'Clubs';
// const hearts: Suit = 'Hearts'; // type error: utility type does not expect string 'Hearts'