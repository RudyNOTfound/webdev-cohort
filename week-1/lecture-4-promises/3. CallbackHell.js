//callback hell
setTimeout(()=>{
    console.log(`hi there`);
    setTimeout(()=>{
        console.log(`hi there 2`);
        setTimeout(()=>{
            console.log(`hi there 3`);
        },5000);
    },3000);
},1000);

//alt solution 

function step3(){
    console.log(`hi there 3`);
}
function step2(){
    console.log(`hi there 2`);
    setTimeout(step3,5000);
}
function step1(){
    console.log(`hi there`);
    setTimeout(step2,3000);
}

setTimeout(step1,1000);