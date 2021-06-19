const firstName = 'William';
const lastName = 'Johnson';
const age = 38;
const str = 'Hello there my name is Bobby';
const tags = 'Web development, web design, programming';


let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Bobby ';
val += 'Ferrer';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping

val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[3];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');


// charAt()

val = firstName.charAt('0');

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
// val = firstName.substring(1, 4);

// Slice()
val = firstName.slice(1, 4);
val = firstName.slice(-5);

// split()
val = str.split(' ');
val = str.split('');

// replace
val = str.replace('Bobby', 'Jules');

// includes
val = str.includes('names');


console.log(val);