const fs=require("fs");
const readStrean=fs.createReadStream("tex.js",{encoding:"utf-8"});

readStrean.on("data",(chunk)=>{
    console.log(chunk);
    
})
readStrean.on("end",()=>{
    console.log("no more data here");
    
})

readStrean.on("err",(errr)=>{
    console.log(errr);
    
})