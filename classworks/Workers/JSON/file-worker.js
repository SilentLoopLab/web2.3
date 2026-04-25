const { parentPort, workerData } = require("worker_threads");
const fs = require("fs");

const targetFile = workerData;

console.log("[Worker] Starting to read the file...");

fs.readFile(targetFile, "utf8", (_, fileContent) => {
    try {
        const jsObject = JSON.parse(fileContent);
        parentPort.postMessage(jsObject);
    } catch (parseError) {
        throw new Error("Invalid JSON format in the file");
    }
});
