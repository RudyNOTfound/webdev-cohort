const fs = require("fs");

function cleanFilePromisified(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,"utf-8",function(err, data){
            if(err){
                reject();
            }
            else{
                let contents = data.trim();    
                fs.writeFile(filename, contents, function(err){
                    if(err){
                        reject();
                    }
                    else{
                        resolve(data);
                    }
                }); 
            }
        })
    })
}

//given the cleanFile promisified version, write a promisified function that takes a file prefix as an input (a) and cleans ({prefix}1.txt), ({prefix}2.txt), and ({prefix}3.txt).

//Approach 1: Promise chaining

/*
function cleanManyFiles(prefix){
    return new Promise(function(resolve,reject){
        cleanFilePromisified(prefix+"1.txt")
        .then(function(){
            cleanFilePromisified(prefix+"2.txt")
            .then(function(){
                cleanFilePromisified(prefix+"3.txt")
                .then(function(){
                    resolve();
                })
                .catch(reject);
            })
            .catch(reject);
        })
        .catch(reject)
    })
}
*/


//Approach 2: Async Await
/*
function cleanManyFiles(prefix){
    return new Promise(async function(resolve,reject){
        try{
            await cleanFilePromisified(prefix+"1.txt");
            await cleanFilePromisified(prefix+"2.txt");
            await cleanFilePromisified(prefix+"3.txt");
            resolve();
        }
        catch(err){
            reject(err);
        }
    })
}
*/

//Approach 3:

//similar to above
//Promise on top of promise function
async function cleanManyFiles(prefix){
    //error is handled already here, no need for try catch here
    await cleanFilePromisified(prefix+"1.txt");
    await cleanFilePromisified(prefix+"2.txt");
    await cleanFilePromisified(prefix+"3.txt");
    //return "asdaf" = resolve("asdaf") here
}

cleanManyFiles("file")
.then(function(){
    console.log(`All files cleaned`);
})
.catch(function(err){
    console.log(`Error : ${err}`);
})