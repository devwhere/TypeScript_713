let colors = ["red", "blue", "green", "yello", "orange", "purple"];
for (const c of colors) {
  console.log(c);
}

let colors2 = ["red", "blue", "green", "yello", "orange", "purple"];
for (const index in colors) {
  console.log(`Index: ${index}, Value: ${colors2[index]}`);
}
