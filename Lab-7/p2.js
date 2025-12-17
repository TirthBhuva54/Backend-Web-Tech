// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. 
// (B)  
const http =require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if (req.url=='/about') {
        res.statusCode=200;
        res.write("Hello from about Page");
    }
   else if (req.url=='/home') {
         res.statusCode=200;
         res.write("Hello from home Page");
    }
    else if(req.url=='/'){
        res.statusCode=200;
        res.write("Welcome to our web page");
    }
    else if (req.url=='/login') {
        res.statusCode=200;
        res.write("Hello from login Page");
    }
    else if (req.url=='/contact') {
        res.statusCode=200;
        res.write("Hello from contact Page");
    }
    else if (req.url=='/help') {
        res.statusCode=200;
        res.write("Hello from help Page");
    }
    else{
        res.statusCode=404;
        res.write("Page not found");
    }
    res.end();
});
server.listen(3000,()=>{
    console.log("Server started @3000");  
})