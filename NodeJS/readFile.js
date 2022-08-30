var file = require("fs");

function readData(err, data) {
    console.log(data);
}

file.readFile('file.txt', 'utf-8', readData);