let name: string;
const greet = function greet(name: string) {
  return "Hello " + name;
};

console.log(greet("John"));

const greet2 = (name: string) => "Hello " + name;
console.log(greet2("John2"));

const multiply = (x: number, y: number) => {
  return x * y;
};
console.log(multiply(5, 10));

// function findMax(x: number, y: number) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log(findMax(29, 30));

const findMax = (x: number, y: number): number => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

console.log(`max number is ${findMax(25, 40)}`);
// console.log(`max number is ${findMax}`);
0;
