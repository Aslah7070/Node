const fs=require("fs");
fs.readFile(__filename,()=>{
    console.log("filereaded");
    
})

setTimeout(()=>console.log("timeout"))
process.nextTick(()=>console.log("nexgTick"));
Promise.resolve().then(()=>console.log("promise"));
setImmediate(()=>console.log("immideate-1"))