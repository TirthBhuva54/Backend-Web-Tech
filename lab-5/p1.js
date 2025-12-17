
const abc = require("child_process");
// const { log } = require("console");
// const { console } = require("inspector");
// const { stdout, stderr } = require("process");

abc.exec('node --version',(error,stdout,stderr)=>{
    if(error){
        console.log('node error'+error);
        return
    }
    if(stderr){
        console.log('file error'+stderr);
        return
    }
    console.log(stdout);
})
    
