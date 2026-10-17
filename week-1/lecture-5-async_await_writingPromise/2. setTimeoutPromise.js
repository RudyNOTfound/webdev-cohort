function setTimeoutPromisified(ms){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,ms);
    })
}



let p = setTimeoutPromisified(1000);
p.then(function(){
    console.log(`resolved`);
}).catch(function(){
    console.log(`failed`);
}).finally(function(){
    console.log(`either of then or catch ran`)
})