const fs = require("fs"); // importing a internal package
const contents = fs.readFileSync("a.txt","utf-8"); // using a sync function of the imported package/module 
console.log(contents);