const fs = require("fs");

function readFileCallback(err, contents){//error first callbacks
    console.log(contents);
}
fs.readFile("a.txt","utf-8", readFileCallback);

let s = 0;
console.log(s);