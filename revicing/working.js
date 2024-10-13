const fs =require("fs")
fs.readFile("index.txt","utf-8",()=>{
    console.log("resd completed");
    
    })
setImmediate(() => console.log("this is setImmediate 1"));


setTimeout(() => console.log("this is setTimeout 1"), 0);
