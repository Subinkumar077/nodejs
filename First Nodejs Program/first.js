const fs = require('fs');
console.log("welcome to learning Node js");
let b = 4;
let a = 5;
let sum = a + b;
let product = a*b; 

console.log(`sum: ${sum}\nproduct: ${product}`);

//write data to local file

fs.writeFile('output.txt', "Writing File", (err) => {
    if (err) console.log("Error Occured");
    else console.log("Writing File successfully");
});