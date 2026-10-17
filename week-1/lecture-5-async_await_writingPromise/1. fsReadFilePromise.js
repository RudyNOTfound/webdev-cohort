//promisified version of readFile on top of fs.readFile

let fs = require("fs");

function fsReadFilePromise(filename, encoding){
    return new Promise(function(resolve,reject){//This promise class is responsible for calling this function 
        fs.readFile(filename,encoding,function(err,data){
            if(err){
                reject(err); //goes to .catch
            }
            else{
                resolve(data); //goes to .then
            }
        })
    })
}

let p = fsReadFilePromise("a.txt","utf-8");
p.then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(`there was an error: ${e}`);
})