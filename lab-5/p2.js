const cp=require("child_process");
const { stderr } = require("process");
const child = cp.spawn("cmd.exe",["/c","dir","/s","C:\\"]);
child.stderr.on('data',(data)=>{
    console.log(`StdERR:${data}`);
})
child.stdout.on('data',(data)=>{
      console.log(`Stdout:${data}`);
})
child.on('close',(data)=>{
    console.log(`close:${data}`);
})