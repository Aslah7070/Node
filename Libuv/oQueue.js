const fs=require("fs");


setTimeout(()=>console.log("timeout"),0)
fs.readFile(__filename,()=>{
    console.log("readFile");
    
})