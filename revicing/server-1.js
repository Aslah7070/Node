const fs=require("fs");
const http=require("http");
const path=require("path")


http.createServer((req,res)=>{
    const filePath=path.join(__dirname,"index.html")
console.log(filePath);
    if(req.url==="/"){
       fs.readFile(filePath,(err,data)=>{
        if(err){
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.write("something wrong",err);
            res.end()
        }else if(data){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end()
        }
       })
    }
})
.listen(3000,()=>{
    console.log("server started");
    
})