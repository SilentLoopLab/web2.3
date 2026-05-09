// Promise.all([
//     Promise.resolve("a"),
//     Promise.resolve("b"),
//     // fetch("https://www.google.com/"),
// ]).then(boo => {
//     boo.forEach((e) => console.log(e))
// })
// .catch(err => {
//     console.log(boo);
// })

// Promise.any([
//     Promise.reject("a"),
//     Promise.reject("b"),
//     Promise.resolve("c"),
// ]).then(boo => {
//     console.log(boo);
// })
// .catch(err => {
//     console.log(err);
// })

// Promise
// .race([
//     Promise.reject("a"),
//     Promise.reject("b"),
//     // fetch("https://www.google.com/"),
// ]).then(boo => {
//     console.log("then",boo);
// })
// .catch(err => {
//     console.log("catch",err);
// })

// Promise.allSettled([
//     Promise.reject("a"),
//     Promise.reject("b"),
//     Promise.resolve("c"),
// ]).then(boo => {
//     boo.forEach(e => console.log(e.value));
// })
// .catch(err => {
//     console.log("catch",err);
// })