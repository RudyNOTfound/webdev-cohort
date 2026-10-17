const fs = require("fs");

function fsReadFilePromise(filename, encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,encoding,function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

//inside this function things are sync with the await syntax
async function main(){
    console.log("first this (enters the async function)");
    let file1contents = await fsReadFilePromise("file1.txt","utf-8");//returns the data of promise after resolving (the arguement passed inside resolve)
    let file2contents = await fsReadFilePromise("file2.txt","utf-8");
    let file3contents = await fsReadFilePromise("file3.txt","utf-8");

    console.log(file1contents);
    console.log(file2contents);
    console.log(file3contents);
}

main();//but this function behaves as a async

console.log("second this cpu heavy task will be done, and the async function will be handled by js runtimes(browser/runtime apis)")