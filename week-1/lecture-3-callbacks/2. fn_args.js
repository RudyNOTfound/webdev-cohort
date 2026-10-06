function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function arithm(a,b,whatToDo){
    if(whatToDo=="sum"){
        return sum(a,b);
    }
    else if(whatToDo=="sub"){
        return sub(a,b);
    }
}

function fnArg(a,b,fn){
    return fn(a,b);
}


let a = 1;
let b = 2;
const ans1 = arithm(a,b,"sum");
const ans2 = arithm(a,b,"sub");

const ans3 = fnArg(a,b,sum);
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(fnArg(a,b,sub));