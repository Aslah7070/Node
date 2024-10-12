const fs=require("fs");
const { nextTick } = require("process");
fs.readFile("index.text","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})
console.log("jdsf");
process.nextTick(()=>{
    console.log("nextTick");
    
})
setTimeout(()=>{
    console.log("timeOUT");
    
})
setImmediate(()=>{
    console.log("immedeate");
    
})

fs.readFile("index.text","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})
