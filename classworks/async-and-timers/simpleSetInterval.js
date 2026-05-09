let secondsElapsed = 0;

const timerId = setInterval(() => {
    secondsElapsed++;
    console.log(`Seconds elapsed: ${secondsElapsed}`);

    if (secondsElapsed === 5) {
        console.log("Timer stopped.");
        clearInterval(timerId);
    }
}, 1000);

for (let i = 0; i < 4_000_000_000; ++i) {
    
}
