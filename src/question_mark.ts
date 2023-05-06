// // ternary oparetor....

// const age: number = 2;

// if (age>18) {
//     console.log('adalt')
// }else{
//     console.log('not edalt')
// }

// const isAdult = age >= 18 ? "yes" : 'no';

// console.log(isAdult);
// // nullish coalescing operator....
// // null and undefined....

// const isAuthUser = "";
// const userName1 = isAuthUser ?? 'guest';
// const userName2 = isAuthUser ? isAuthUser :'guest';
// console.log({userName1}, {userName2});

// function generateAdder(a: number): (b: number) => number {

//     return function(b: number) {
  
//       return a + b;
  
//     };
  
//   }
  
  
  
//   const addTwo = generateAdder(2);
  
//   console.log(addTwo(3));
  
//   console.log(addTwo(5));