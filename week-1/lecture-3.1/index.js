//arrow function
const sum = (a,b) => {
    return a+b;
}

//map
const input = [1,2,3,4,5];
const output = [];

for(let i = 0;i<5;i++){
    output.push(input[i]*2);
}
console.log(output);

//other solution
function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);



//filtering

const arr = [1,2,3,4,6];
const newArr = [];

for(let i = 0;i<5;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);

//other solution
const sol = arr.filter((i)=>{
    return i%2==0;
})
console.log(sol);