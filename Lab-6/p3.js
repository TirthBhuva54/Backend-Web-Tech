const fs = require("fs");
console.log("Start");

// fs.writeFile("output.txt","Hello world from output",(err)=>{
//     if(err){
//         console.log(`Error : ${err}`);
//     }
// })


try {
    fs.writeFileSync("output.txt","New data")
} catch (err) {
    console.log(`Error : ${err}`);
}