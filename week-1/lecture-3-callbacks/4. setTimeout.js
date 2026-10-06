const a = 1;
const b = 2;

console.log(a);
console.log(b);

function clockCallback(){
    console.log(a+b);
}
setTimeout(clockCallback,1000);

console.log("CPU task");