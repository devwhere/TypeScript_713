function greet(name: string) {
  console.log("Hello " + name);
}
greet("John");

function greet2(name: string) {
  return "Hello " + name;
}
greet2("John");

function greet3(name: string) {
  return "Hello " + name;
}
console.log(greet2("John"));

let num: number[] = [10, 20, 30];
function sum(total: number[]) {
  let sum: number = 0;
  for (const n of total) {
    sum += n;
  }
  console.log(sum);
}
sum(num);
