const fs=require("fs");
console.log("Start")
// fs.mkdir("My folder",(err)=>{
//     if (err) {
//         console.log(`Error: ${err}`);
//     }
//     else{
//         console.log("folder creation succesfull");
//     }
// })
// console.log("End")
try{
        fs.mkdirSync('My-Folder');
        console.log('folder created success');
}catch(err){
        if(err.code === 'EEXIST'){
        console.log(err);
    }
}