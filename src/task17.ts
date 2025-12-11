// const waitAndPrint = (message: string, delay: number) => {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// };

// waitAndPrint("Hello, world!", 2000);

const waitAndPrint2 = (message: string, delay: number) => {
  let count = 1;
  console.log(message);

  const printMore = () => {
    message = message + " world";
    console.log(message);
    count++;
    setTimeout(printMore, delay);
  };

  setTimeout(printMore, delay);
};

waitAndPrint2("Hello, world!", 3000);
