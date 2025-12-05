const add = (a: any, b: any) => {
  return a + b;
};
console.log(add(1, 2));
// มันไม่ยอมให้ไม่ใส่type

const add2 = (a: number, b: number) => {
  return a + b;
};
const result = add(1, 2) + 3;
console.log(result, "type of result: ", typeof result);

const add3 = (a: number, b: number): string => {
  const result = a + b;
  return result.toString();
};
console.log(add3(2, 3));
// ไม่มี noti

let numbers: number[] = [7, 2, 4, 6, 5];
const findmax = (nums: number[]): number => {
  let max: number = nums[0]!;
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  //   console.log("num[0] = ", num[0], typeof num[0]);
  // let max :number = num[0];
  // const()
  return max;
};
console.log(findmax(numbers));
