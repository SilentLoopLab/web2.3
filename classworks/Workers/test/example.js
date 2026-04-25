const { Worker } = require("node:worker_threads");

let x = new Worker('./worker.js');
console.log(x);

