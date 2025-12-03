let i: number = 0;
for (i = 0; i < 10; i++) {
  console.log(i);
}

let color: string[] = ["red", "blue", "green", "yellow", "orange", "purple"];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}

let names: string[] = ["Tui", "Pattama", "Easter", "Superman", "December"];
for (const name of names) {
  if (name.length > 6) {
    console.log("สวัสดีคุณ " + name);
  } else {
    console.log("Hello " + name);
  }
}
