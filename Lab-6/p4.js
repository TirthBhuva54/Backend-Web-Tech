const fs = require("fs");
console.log("Start");
// fs.appendFile("output.txt","\nhello world",(err)=>{
//     if(err){
//         console.log(`Error : ${err}`);
//     }
// })

try {
    fs.appendFileSync("output.txt","\nusing sync")
} catch (err) {
    console.log(`Error : ${err}`);
}