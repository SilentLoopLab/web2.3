const btnBad = document.getElementById('btn-bad');
const btnGood = document.getElementById('btn-good');
const resultText = document.getElementById('result');

const myWorker = new Worker('worker.js');

btnBad.addEventListener('click', () => {
    resultText.innerText = 'Calculating in main thread... (Look at the red box!)';
    
    let sum = 0;
    for (let i = 0; i < 3000000000; i++) {
        sum += 1;
    }
    
    resultText.innerText = `Main Thread Done! Result: ${sum}`;
});

btnGood.addEventListener('click', () => {
    resultText.innerText = 'Worker is calculating... (Red box keeps moving!)';
    
    myWorker.postMessage('start_task');
});

myWorker.onmessage = (event) => {
    const finalResult = event.data;
    resultText.innerText = `Worker Done! Result: ${finalResult}`;
};

myWorker.onerror = (error) => {
    console.error('Worker error:', error.message);
};