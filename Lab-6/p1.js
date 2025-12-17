const { error } = require("console");
const  fs=require("fs");
console.log("start");
fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(`Error:${err}`);
    }
     console.log(`data:${data}`);
})
console.log("End");