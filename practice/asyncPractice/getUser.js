function getUser() {
  fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then(data => console.log('User:', data));
}

async function asyncGetUser() {
    const response = await fetch('https://fakestoreapi.com/users');
    const data = await response.json();
}

asyncGetUser();