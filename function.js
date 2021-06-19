// Function Declarations

// function greet(firstName = 'John', lastName = 'Doe') {
//    if(typeof firstName === 'undefined') {
//      firstName = 'John';
//    } if(typeof lastName === 'undefined') {
//     lastName = 'Doe';
//    }
//    console.log('Hello');
//    return `Hello ${firstName} ${lastName}`;

// }

// console.log(greet());

// Function Expression

// const square = function(x = 100) {
//    return x * x;
// }

// console.log(square());

// Immidiately invokable function expressions - IIFE's

// (function() {
//   console.log('IFFE Ran...');
// })();

// (function(name) {
// console.log(name);
// })('Bob');

// Property Methods
const todo = {
    add: function() {
      console.log('Add todo...');
    },
    edit: function(id = 100) {
     console.log(`Edit todo ${id}`);
     return `Edit to todo ${id}`;
    }
  }
  
  todo.delete = function() {
    console.log('Delete Todo...');
  }
  
  todo.add();
  console.log(todo.edit());
  todo.delete();