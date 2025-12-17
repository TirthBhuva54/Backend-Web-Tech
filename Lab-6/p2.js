const fs = require("fs");
console.log("Start");
try {
   result=fs.readFileSync("info.txt").toString() 
   console.log(result);
} catch (err) {
 console.log(`Error:${err}`);
}

console.log("End");