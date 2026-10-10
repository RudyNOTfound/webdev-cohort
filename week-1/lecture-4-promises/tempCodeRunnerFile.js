sified(1000).then(function(){
    console.log(`hi there`);
    setTimeoutPromisified(3000).then(function(){
        console.log(`hi there 2`);
        setTimeoutPromisified(5000).then(function(){
            console.log(`hi there 3`);
        })
    })
})