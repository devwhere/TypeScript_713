const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

const even = n.map((num) => num % 2 == 0);
console.log(even);

const num: number[] = [1, 2, 3, 4];

const tripple = (num: number[]): number[] => {
  const checkTripple = num.map((n) => (n % 3 == 0 ? n * n * n : n));
  console.log(checkTripple);
  //   console.log(typeof checkTripple);
  return checkTripple;
};

console.log(tripple(num));
