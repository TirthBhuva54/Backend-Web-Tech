const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/home",(req,res)=>{
    res.status(200).send("Hello World from Home Page");
});
app.get("/login",(req,res)=>{
    res.status(200).send("<h1>Hello World from login Page<h1>");
});
app.get("/contact",(req,res)=>{
    res.status(200).send("Hello World contact Home Page");
});
app.get("/about",(req,res)=>{
    res.status(200).send("Hello World from about Page");
});
app.get("/profile",(req,res)=>{
    res.status(200).send("Hello World from profile Page");
});
app.use((req,res)=>{
    res.status(404).send("Page not Found");
})
app.listen(3000,()=>{
    console.log("Server started at 3000");
})