// button.addEventListener('click', (event) => {
//   const data = fetch('/api/click-stats'); // we need to wait for this!
//   console.log('Saved');
// });

const button = document.getElementById("requestButtonForUsers");

button.addEventListener("click", async () => {
    const data = await fetch("https://fakestoreapi.com/users/");
    const json = await data.json();
    console.log(json);
});
