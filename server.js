"use strict";

const cluster = require("cluster");

// Is the file being executed in Master Mode
if (cluster.isMaster) {
    // PRODUCTION - Calc Threads and Start Fork Threads

    //const numWorkers = require('os').cpus().length;   // Multi-CPU
    const numWorkers = 1; // Single CPU

    console.log("Master cluster setting up " + numWorkers + " workers...");
    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on("online", function (worker) {
        console.log("Worker " + worker.process.pid + " is online");
    });

    cluster.on("exit", function (worker, code, signal) {
        console.log(
            "Worker " +
                worker.process.pid +
                " died with code: " +
                code +
                ", and signal: " +
                signal
        );
        console.log("Starting a new worker");
        cluster.fork();
    });
} else {
    // Child Server
    require("./services/express");
}

console.log(cluster.isMaster);
