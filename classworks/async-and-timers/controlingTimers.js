console.log("Bomb planted. Detonation in 5 seconds!");

const bombTimerId = setTimeout(() => {
    console.log("BOOM!");
}, 5000);

setTimeout(() => {
    console.log("Bomb defused! Counter-terrorists win.");
    clearTimeout(bombTimerId); 
}, 2000);