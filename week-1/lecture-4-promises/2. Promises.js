function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} //take it as a black box for now

function callback(){
    console.log("after 3 seconds this function will be called");
}

setTimeoutPromisified(3000).then(callback);


const fs = require("fs");

function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}// black box

function callback2(data){
    console.log(data);
}
function callbackErr(err){
    console.log(`error while reading the file and the error is ${err}`);
}

fsReadFilePromisified("a.txt","utf-8")
    .then(callback2)
    .catch(callbackErr);