console.log('Hello everyone');

// <!-- variables, constants and comments  -->
const store=34;   

// declaration
console.log(store); //redcleration
// console.log(store);
//  var Rahul=19;
//  console.log(Rahul);
 // reassign


 // constants

 const value=10;
 console.log(value);
 //Data types of values

 // 7 data types

 //1.  Numbers 1,2,55 3.4
 // string "I am string", "34"

 // Boolean true/false
 // null  Intentionally absence of values 

 let score=null;
 console.log(score);

 // undefined variable declared but not initialized

 // object complex data structure
 // symbols looks like object

 // strings
 console.log('Hello Coders');

 let firstName='full stack'
 let lastName='DEVELOPER'
 console.log(firstName,lastName);

 // string concatenation

 // method using +  operator

//  let fullName= firstName + " " + lastName;
//  console.log(fullName);

 // method 2 template literals
  let fullName=`I want to become ${firstName} ${lastName}`;
  console.log(fullName);

  // string characters
  console.log(firstName[5]);

  // string methods
   console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// console.log(typeof firstName);
console.log(firstName.indexOf('f'));
let subjects=  'Science math english';
console.log(firstName.trim());
console.log(subjects.lastIndexOf("Science"));

// includes
console.log(subjects.includes('Math'));

/// slice & splice 
let kunal='programmer';
console.log(kunal.slice(0,6));
// strings are immutable
let languages=['Hindi', 'English', 'Math'];
let kirna=languages.splice(0,1);
console.log(kirna);
console.log(languages);
console.log(kunal)  

let str='Hello';
str[0]='p';
 console.log(str);
str=str+'Nikhil' 
str+='Nikhil';
console.log(str);
 let scor=35;
// let result=scor%5;


  
// console.log(result);

let result = scor *2 + (4*3)-8/2 + 4 // 70+ 12 -4+4 
console.log(result);

// using priority and precedence

// 1. () Bracket
// 2. ** Power operator
// 3. / % (from left to right)
// 4. + - (from left to right)

// loose equality and looseless equalty
let age=24; //number
console.log(age === 24); 

// looseless -> stict equality

// Type conversion
 let stringType='45';
 console.log(stringType, typeof stringType);
 //  number
 let  numberType=String(stringType);
 console.log(numberType, typeof numberType);

 // number type method, string must be of numeric value


 // Boolean method  (true/false)

 let ag= '' ; // empty string
 let booleanValue=Boolean(ag);
 console.log("Boolean value of age is:", booleanValue);


 // Arrays

 let dish= ['Paneer', 'Chat', 'Oats'];
 // access
  console.log(dish[2]);

  dish[0]= 'puri';
  console.log(dish);

  // Array methods

  // join method
  console.log(dish.join(','))  // ('') -> selectors

  console.log(dish.indexOf('Chat'));

  // concat method
let newDish=['Rasgulla', 'Mango'];
  console.log(dish.concat(newDish));

  // length method
  console.log(dish.length); 

  // // push method
  // console.log(newDish.push('Dosa'));
  // console.log(newDish);

  // // pop method
  // console.log(newDish.pop('Dosa'));
  // console.log(newDish);

  console.log(dish);


  // Boolean values and Comparison operator



// Operators
// 1.Assignment operator -> =, +=,-=, *=, /=, %=, **= , x **=y, 
// 2. adddition operator, multiplication, divison, subtraction, modulas (%), increment ++ ,decrement -- ** exponential -> Arithmetic operator
// 3. Comparison operator ->  ===,==, !=, !== (not equal value or not equal type), >, <, >=, <=, ? (ternary operator)
// string compare -> 
// let a='aman';
// let b='raghav';

// let res = a>b;
// console.log(res);
let a = 5;

let b = 7;

let c = 8;

let r = a < b > c;
 console.log(r);

 // string concatenation
 let x=2+3;
 let y= "A"+ 3;
 let z= 'Hello' + 1;
 let q= z+y+x;
 console.log(q);
console. log( typeof z, typeof q);

// 4. logical operator -> && (logical and), || (logical or), ! (logical not)

// -> type operator
// typeof -> returns type of variable
//  instanceof -> return true  if an object is an instance of an onject type
 
 //  bitwise operator -> &, |, ~ (not), << (left shift), >> (right shift)
 // ternary operator -> ?

 // include method, 

 // comparison operators always return boolean value

 
