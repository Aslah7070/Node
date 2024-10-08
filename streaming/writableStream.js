const  fs=require("fs");
const writable=fs.createWriteStream("text.txt");
writable.write("hello world \n")
writable.end();

writable.on("end",()=>{
    console.log("all data recived");
    
})

writable.on("err",(err)=>{
    console.log(err);
    
})