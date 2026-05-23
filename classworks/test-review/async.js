setTimeout(() => {
  console.log("A");
  Promise.resolve().then(() => {
    console.log("B inside A");
  });
  console.log("C inside A");
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});
console.log("E");