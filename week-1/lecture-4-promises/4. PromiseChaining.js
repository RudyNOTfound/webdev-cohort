function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function(){
    console.log(`hi there`);
    setTimeoutPromisified(3000).then(function(){
        console.log(`hi there 2`);
        setTimeoutPromisified(5000).then(function(){
            console.log(`hi there 3`);
        })
    })
})

//better way
setTimeoutPromisified(1000).then(function(){
    console.log(`hi there`);
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log(`hi there 2`);
    return setTimeoutPromisified(5000);
}).then(function(){
    console.log(`hi there 3`);
})