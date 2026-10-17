//Approach 1: callback based, sync fn calls

/*
const fs = require("fs");

function cleanFileSync(filename, callbackFn){
    let contents = fs.readFileSync(filename,"utf-8");
    let newContent = contents.trim();
    fs.writeFileSync(filename, newContent);
}

cleanFileSync("b.txt");
*/

//Approach 2: callback based, async function calls
/*
const fs = require("fs");

function cleanFileAsync(filename,callbackFn){
    fs.readFile(filename,"utf-8",function(err, data){
        let contents = data.trim();    
        fs.writeFile(filename, contents, callbackFn); //or function(){callbackFn();}
    })
}

cleanFileAsync("b.txt", function(){
    console.log("cleaning is complete");
});
*/

//Approach 3: Promisified, no async await
/*
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

cleanFilePromisified("b.txt")
.then(function(data){
    console.log(`file has been cleaned with initial data ${data}`);
})
.catch(function(){
    console.log("error while reading");
});
*/

//Approach 4: Promise based + Async Await
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

async function main(){
    try{
        await cleanFilePromisified("b.txt");
        console.log(`file was cleaned`);
    }
    catch(err){
        console.log(`error = ${err}`);
    }
} 

main();