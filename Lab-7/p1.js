// . Create a hello world webapp using “http” core module in NodeJS. (A)

const http =require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write("Hello World from du");
    res.end();
});
server.listen(3000,()=>{
    console.log("Server started @3000");  
})