onmessage = (event) => {
    const command = event.data;

    if (command === 'start_task') {
        console.log('[Worker] Task started...');
        
        let sum = 0;
        for (let i = 0; i < 3000000000; i++) {
            sum += 1;
        }
        
        console.log('[Worker] Task finished, sending result back.');
        
        postMessage(sum);
    }
};