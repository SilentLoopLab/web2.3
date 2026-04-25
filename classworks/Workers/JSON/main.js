const { Worker } = require("worker_threads");
const path = require("path");

class JsonReader {
    constructor(fileName) {
        this.filePath = path.join(__dirname, fileName);
        this.worker = new Worker("./file-worker.js", {
            workerData: this.filePath,
        });
    }

    start() {
        console.log(`[Main] Requesting worker to process: ${this.filePath}`);

        this.worker.on("message", (parsedObject) => {
            console.log("[Main] Success! Received JS object from worker.");
            console.log(`[Main] App Name from object: ${parsedObject.appName}`);
            console.log(
                `[Main] Total users found: ${parsedObject.users.length}`,
            );
        });

        this.worker.on("error", (err) => {
            console.error(`[Main] Error happened in worker: ${err.message}`);
        });
    }
}

const reader = new JsonReader("data.json");
reader.start();

console.log("[Main] Main thread can handle other users now...");
