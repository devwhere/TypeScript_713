let x = 10;
x = 15;
console.log(x);

interface Person {
  name: string;
  age?: number | null;
}

const a: Person = {
  name: "Alice",
  age: null,
};

// a = {
//   name: "Bob",
//   age: 25,
// };

a.name = "Bob";

console.log(a);

const list = [1, 2, 3, 4, 5];
console.log(list);
