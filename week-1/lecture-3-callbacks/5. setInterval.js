let ct = 0;

function interCallback(){
    console.log(ct);
    ct++;
}

setInterval(interCallback,1000);

let ans = 0;

for(let i = 0;i<4000000000;i++){
    ans+=i;
}

console.log(ans);