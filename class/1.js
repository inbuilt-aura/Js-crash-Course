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

 
// control flow

//  for loop, while loop, do while loop


// for(let x=0;x<=8;x++){ // step change
//   console.log('I am sunil',x);
// }
//array
 let disha= ['Maggie', 'Chowmein','india'];


// // access the array values
// console.log(disha[2]);
// for(let i=0;i<disha.length;i++){ //
//   console.log(disha[0]);
// }
// let i=0;
// while(i<disha.length){
//   console.log(disha[0]);
//   i++;
// }

// let i=0;
// do{
// console.log("Sunil =",i);
// i++;
// }while(i>1);
// console.log(typeof disha)

// // while loop 
// // row-> 4, column:5

// for (let row; row<=5; row++){
//   console.log('for loop', row);
// }
//  console.log('*******');

//  let i=1;
// while(i<=5){ // get statement-> conndition is mandatory
// console.log('*', i);
// i++; // if this isnt presnet, then infinite loop occurs.
// }
// let j=0;
// while(j<disha.length){
//   console.log("My favourite dish is = ", disha[j]);
//   j++; // without this, statement will get infinite loop.
// }

// //Do-while loop
// const greeting = (person) => {
//   const name = person ? person.name : "stranger";
//   return `Howdy, ${name}`;
// };

// console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
// console.log(greeting(0)); // "Howdy, stranger"


// //q1:
// // let arr1=[1,2,3,4,5];
// // let arr2=[1,2,3,4,5];
// // let sum1 = arr1.reduce((a,b) => a + b);
// // let sum2 = arr2.reduce((a,b) => a + b);
// // let sum =sum1+sum2;
// // console.log("The sum of both arrays are: ", sum);


// //q2:
// // let n=prompt("Enter a number:");
// // for( let i=2;i<=n;i+=2){
// //   console.log(i);
// // }

// let n = 20;

// for (let i = 2; i <= n; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }202

// conditional statements, if-else, switch, ternary operator

// if-else// nested-if 
// let budget=800;
// if(budget>600){ // block scope
//   console.log("Budget is tight");
// }else if(budget>400){
//   console.log("Budget is thik thak");
// }else if(budget<200){
//   console.log("Budget is okay");
// }else{
// console.log("Budget is not possible");
// }
// console.log("I am sunil");
// console.log("I am sunil.");

// break and continue statement -> jump statements
// for (let k=1;k<=10;k++){
//   if(k==3){
//     break;
//   }
//   console.log(k);
// }
// switch statement
// let day=4;
// switch(day){
//   case 1:  console.log("Monday");
//  break;
//     case 2:
//       console.log("Tuesday");
//       break;
//       case 3:
//         console.log("Wednesday");
//        break;
//         case 4:  console.log("Thursday");
//         break;
//           case 5:
//    console.log("Friday");
//    break;
//    default:
//  console.log("Sunday");
// } 

// ternary operator

//-->left-riight approch in javascript

// let menu=12;
// let weigh=28;
// if(menu>18){
//   console.log("Aman");
// }
// else{
//   console.log("sunil");
// }
// single line solution
//  let resul=menu<18?weigh>28? "Qulify" : "Aman":"Sunil"; // tenrary operator
// console.log(resul);

// variable and block scope

// global scope, block scope
// let d=10; 
// d=20// global scope
// if(true){
//  const w=10;
//  console.log(d);
// }
// conditional;l stement &&, ||, !
// global scope
